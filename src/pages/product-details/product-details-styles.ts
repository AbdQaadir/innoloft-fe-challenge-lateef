import styled from "styled-components";

export const StyledProductDetails = styled.section`
  width: 100%;

  .product-img {
    width: 100%;
    height: 350px;
    border: 1px solid #ccc;
    padding: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .product-main-info {
    padding: 15px 0;
    p {
      margin: 10px 0;
      span {
        font-weight: 600;
        font-size: 1.25em;
      }
    }
  }

  .product-tab {
    .product-tab-buttons {
      display: flex;
    }
  }
  .product-desc-attr-content {
    padding: 20px;
    margin-bottom: 30px;
    border: 1px solid #ccc;
  }

  .user-info {
    border: 1px solid #cecece;
    padding: 20px;
    text-align: center;
    margin-bottom: 30px;

    .user-img-wrapper {
      max-height: 250px;
      max-width: 250px;
      margin: 20px auto;
      border-radius: 50%;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
      }
    }
    .user-name {
      font-size: 1.5em;
    }
    .user-position {
      font-size: 0.9em;
      font-weight: 300;
    }
  }

  .company-location {
    padding: 20px;
    border: 1px solid #cecece;

    h2 {
      font-size: 1.3em;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
`;
