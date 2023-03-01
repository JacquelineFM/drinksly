import PropTypes from "prop-types";
// react-bootstrap
import { Col, Stack } from "react-bootstrap";
// utils
import { getTagsList } from "../../../../utils/tags";
//
import NameAndTags from "./NameAndTags";
import GeneralData from "./GeneralData";

// ----------------------------------------------------------------------

const DrinkInfo = ({ recipe }) => {
  const { strDrink, strTags, strGlass, strAlcoholic, strIBA, strVideo } =
    recipe;
  const tags = getTagsList(strTags);

  return (
    <Col xs={12} lg={8}>
      <Stack gap={3}>
        {(strDrink || strTags) && (
          <NameAndTags strDrink={strDrink} tags={tags} />
        )}
        <GeneralData
          strGlass={strGlass}
          strAlcoholic={strAlcoholic}
          strIBA={strIBA}
          strVideo={strVideo}
        />
      </Stack>
    </Col>
  );
};

export default DrinkInfo;

// ----------------------------------------------------------------------

DrinkInfo.propTypes = {
  recipe: PropTypes.object.isRequired,
};

GeneralData.defaultProps = {
  strGlass: "",
  strAlcoholic: "",
  strIBA: "",
  strVideo: "",
};
