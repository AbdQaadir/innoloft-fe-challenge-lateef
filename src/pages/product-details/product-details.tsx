import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import {
  EmptyState,
  Pane,
  Paragraph,
  LockIcon,
  Heading,
  majorScale,
  toaster,
} from "evergreen-ui";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductData } from "../../redux/features/product/productSlice";

import Button from "../../components/button";
import ProductAttributesForm from "./product-attributes-form/product-attributes-form";
import { StyledProductDetails } from "./product-details-styles";

import { ReactComponent as LoadingIcon } from "../../assets/loading.svg";

const tabList = [
  {
    label: "Description",
    value: "description",
  },
  {
    label: "Attributes",
    value: "attributes",
  },
];
function ProductDetails() {
  const { id }: any = useParams();
  const [selectedTab, setSelectedTab] = useState("description");

  const dispatch: AppDispatch = useDispatch();

  const {
    product,
    isLoading,
    submissionSuccess,
    submissionError,
    error,
    isSuccess,
  } = useSelector((state: RootState) => state.product);

  const { configuration } = useSelector(
    (state: RootState) => state.configuration
  );

  // Fetch product data on mount.
  useEffect(() => {
    if (id && Object.values(product).length < 1) {
      dispatch(fetchProductData(id));
    }
    //eslint-disable-next-line
  }, []);

  // trigger toast message on submission success
  useEffect(() => {
    if (submissionSuccess) {
      toaster.success("Product attributes updated successfully.");
    } else if (submissionError) {
      toaster.danger("Error updating product attributes.");
    }
    //eslint-disable-next-line
  }, [submissionSuccess, submissionError]);

  // show loading icon while product data is being fetched
  if (isLoading && !error) {
    return (
      <Pane
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <LoadingIcon />
      </Pane>
    );
  }

  // show error message on error
  if (error && !isSuccess) {
    return (
      <Pane
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <EmptyState
          background="dark"
          title={error}
          orientation="horizontal"
          icon={<LockIcon color="#EBAC91" />}
          iconBgColor="#F8E3DA"
          description={`Something went wrong while fetching the product with ID *${id}*. Please try again later.`}
          primaryCta={
            <EmptyState.PrimaryButton
              onClick={() => dispatch(fetchProductData(id))}
            >
              Try Again
            </EmptyState.PrimaryButton>
          }
        />
      </Pane>
    );
  }

  const {
    name,
    picture,
    type,
    user,
    trl,
    company,
    categories,
    businessModels,
    description,
  } = product;

  const renderBasedOnSelectedTab = () => {
    switch (selectedTab) {
      case "description":
        return <Pane>{parse(description.replace("onerror", "onError"))}</Pane>;
      case "attributes":
        return (
          <ProductAttributesForm
            productId={id as string}
            categories={categories}
            businessModels={businessModels}
            trl={trl}
          />
        );
      default:
        return <></>;
    }
  };

  const getCompanyAddress = () => {
    const { house, street, city, country } = company.address;
    return `${house}, ${street}, ${city.name}, ${country.name}`;
  };

  return (
    <StyledProductDetails>
      {product && Object.values(product).length > 0 && (
        <>
          <Pane className="row" paddingX={majorScale(3)}>
            <Pane className="col-12" marginY={majorScale(2)}>
              <Heading fontSize="1.5em">Product Details</Heading>
            </Pane>
          </Pane>
          <Pane className="row" paddingX={majorScale(3)}>
            <Pane className="col-12 col-sm-8 col-md-7">
              <Pane className="product-img">
                <img src={picture} alt={name} />
              </Pane>

              <Pane className="product-main-info">
                <Paragraph>
                  Product name: <span>{name}</span>
                </Paragraph>
                <Paragraph>
                  Product type: <span>{type.name}</span>
                </Paragraph>
              </Pane>

              <Pane className="product-tab">
                <Pane className="product-tab-buttons">
                  {tabList.map(({ label, value }) => (
                    <Button
                      key={value}
                      borderRadius={0}
                      look={`primary-${
                        selectedTab === value ? "filled" : "outlined"
                      }`}
                      onClick={() => setSelectedTab(value)}
                    >
                      {label}
                    </Button>
                  ))}
                </Pane>
                <Pane className="product-desc-attr-content">
                  {renderBasedOnSelectedTab()}
                </Pane>
              </Pane>
            </Pane>
            <Pane className="col-12 col-sm-4 col-md-5">
              {configuration?.hasUserSection && (
                <Pane className="user-info">
                  <Pane className="user-img-wrapper">
                    <img src={user.profilePicture} alt="User" />
                  </Pane>

                  <Paragraph className="user-name">
                    {user.firstName} {user.lastName}{" "}
                  </Paragraph>
                  <Paragraph className="user-position">
                    {user.position} @ {company.name}
                  </Paragraph>
                </Pane>
              )}

              <Pane className="company-location">
                <Heading>Company Address</Heading>
                <Paragraph>{getCompanyAddress()}</Paragraph>
              </Pane>
            </Pane>
          </Pane>
        </>
      )}
    </StyledProductDetails>
  );
}

export default ProductDetails;
