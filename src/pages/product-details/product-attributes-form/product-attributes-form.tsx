import { Field, FieldArray, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Button from "../../../components/button";
import SelectInput from "../../../components/form/select-input";
import TextInput from "../../../components/form/text-input";
import { Pane } from "evergreen-ui";
import { AppDispatch, RootState } from "../../../redux/store";

import { updateProductData } from "../../../redux/features/product/productSlice";
import { getTRLOptions } from "../../../redux/features/trl/trlSlice";
import {
  TRLType,
  INITIALTYPE,
  ProductAttributeProps,
} from "./product-attributes.types";

const StyledProductAttributesForm = styled(Pane)`
  .attribute-form-section {
    margin-bottom: 50px;
  }
  .attribute-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 600;
    }
  }
`;

const initalValues: INITIALTYPE = {
  productId: "",
  categories: [],
  businessModels: [],
  trl: "",
};

const ProductAttributesForm = ({
  productId,
  categories = [],
  businessModels = [],
  trl = { id: 0, name: "" },
}: ProductAttributeProps) => {
  const dispatch: AppDispatch = useDispatch();

  const [formInitialValues, setFormInitialValues] = useState(initalValues);

  const { trl: trlOptions, isLoading } = useSelector(
    (state: RootState) => state.trl
  );
  const { isSubmitting } = useSelector((state: RootState) => state.product);

  // Update form initial values based on props.
  useEffect(() => {
    setFormInitialValues((prev) => ({
      ...prev,
      productId,
      categories,
      businessModels,
      trl: trl?.id,
    }));
  }, [trl, productId, categories, businessModels]);

  // Fetch TRL Options on mount.
  useEffect(() => {
    dispatch(getTRLOptions());

    // eslint-disable-next-line
  }, []);

  // Update product attributes on form submit.
  const handleSubmit = (values: ProductAttributeProps) => {
    dispatch(updateProductData(values));
  };

  return (
    <StyledProductAttributesForm>
      <Formik
        enableReinitialize
        initialValues={formInitialValues}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FieldArray
              name="categories"
              render={({ push, remove }) => (
                <Pane className="attribute-form-section">
                  <Pane className="attribute-header">
                    <p>Categories</p>
                    <Button
                      type="button"
                      width="40px"
                      look="primary-filled"
                      onClick={() => push({ id: "", name: "" })}
                    >
                      +
                    </Button>
                  </Pane>

                  {values.categories && values.categories.length > 0 ? (
                    values.categories.map((category, index) => (
                      <Field name={`categories.${index}`}>
                        {({
                          field, // { name, value, onChange, onBlur }
                          form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }: any) => {
                          return (
                            <TextInput
                              label=""
                              name={field.name}
                              value={field.value.name}
                              onChange={field.onChange}
                            />
                          );
                        }}
                      </Field>
                    ))
                  ) : (
                    <></>
                  )}
                </Pane>
              )}
            />

            <FieldArray
              name="businessModels"
              render={({ push, remove }) => (
                <Pane className="attribute-form-section">
                  <Pane className="attribute-header">
                    <p>Attributes</p>
                    <Button
                      type="button"
                      width="40px"
                      look="primary-filled"
                      onClick={() => push({ id: "", name: "" })}
                    >
                      +
                    </Button>
                  </Pane>
                  {values.businessModels && values.businessModels.length > 0 ? (
                    values.businessModels.map((model, index) => (
                      <Field name={`businessModels.${index}`}>
                        {({
                          field, // { name, value, onChange, onBlur }
                          form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }: any) => {
                          return (
                            <TextInput
                              label=""
                              name={field.name}
                              value={field.value.name}
                              onChange={field.onChange}
                            />
                          );
                        }}
                      </Field>
                    ))
                  ) : (
                    <></>
                  )}
                </Pane>
              )}
            />

            <Pane className="attribute-form-section">
              <Pane className="attribute-header">
                <p>RTL</p>
              </Pane>
              <Field name="trl">
                {({ field, meta, form }: any) => {
                  return (
                    <SelectInput
                      loading={isLoading}
                      width="100%"
                      borderRadius="0px 5px 5px 0px"
                      placeholder="Select TRL"
                      options={trlOptions?.map((option: TRLType) => ({
                        label: option.name,
                        value: option.id,
                      }))}
                      name={field.name}
                      value={field.value}
                      onChange={(selected: {
                        label: number;
                        value: string;
                      }) => {
                        form.setFieldValue(field.name, selected);
                      }}
                    />
                  );
                }}
              </Field>
            </Pane>

            <Button
              isLoading={isSubmitting}
              type="submit"
              look="primary-filled"
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </StyledProductAttributesForm>
  );
};

export default ProductAttributesForm;
