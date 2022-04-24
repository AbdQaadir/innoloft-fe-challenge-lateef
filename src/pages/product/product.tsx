import React from "react";
import { useNavigate } from "react-router-dom";
import { Pane, Heading, Paragraph, majorScale } from "evergreen-ui";
import TextInput from "../../components/form/text-input";
import Button from "../../components/button";

const Product = () => {
  let navigate = useNavigate();

  const [productId, setProductId] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = () => {
    if (!productId) return setErrorMessage("Please enter a product id");
    navigate(`/product/${productId}`);
  };

  return (
    <Pane>
      <Pane className="row" justifyContent="center">
        <Pane className="col-10 col-sm-8 col-md-5">
          <Heading fontSize="1.7em" marginY={majorScale(5)} textAlign="center">
            Search Product by ID:
          </Heading>

          <TextInput
            label="Enter Product Id"
            placeholder="Enter Product Id"
            name="productId"
            value={productId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProductId(e.target.value)
            }
          />
          {errorMessage ? (
            <Paragraph color="red500">{errorMessage}</Paragraph>
          ) : (
            <></>
          )}
          <Pane marginY={majorScale(3)}>
            <Button onClick={handleSubmit} look="primary-filled">
              Search
            </Button>
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Product;
