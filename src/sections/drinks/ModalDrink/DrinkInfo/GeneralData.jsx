import PropTypes from "prop-types";
// react-bootstrap
import { Stack } from "react-bootstrap";
import {
  CupFill,
  DropletFill,
  BuildingFill,
  Youtube,
} from "react-bootstrap-icons";
// components
import TextIconLabel from "../../../../components/TextIconLabel";

// ----------------------------------------------------------------------

const ICONS = {
  strGlass: <CupFill className="me-3" aria-label="Glass" />,
  strAlcoholic: <DropletFill className="me-3" aria-label="Alcoholic" />,
  strIBA: <BuildingFill className="me-3" aria-label="IBA" />,
  strVideo: <Youtube className="me-3" aria-label="Video" />,
};

// ----------------------------------------------------------------------

const GeneralData = ({ strGlass, strAlcoholic, strIBA, strVideo }) => {
  const data = [
    { label: "strGlass", value: strGlass },
    { label: "strAlcoholic", value: strAlcoholic },
    { label: "strIBA", value: strIBA },
    {
      label: "strVideo",
      value: strVideo,
      className: "text-decoration-underline",
    },
  ].filter(({ value }) => !!value);

  return (
    <Stack>
      {data.map(({ label, value, className }, index) => {
        const icon = ICONS[label];

        return (
          <TextIconLabel
            key={`${value}-${index}`}
            icon={icon}
            value={value}
            className={className}
          />
        );
      })}
    </Stack>
  );
};

export default GeneralData;

// ----------------------------------------------------------------------

GeneralData.propTypes = {
  strGlass: PropTypes.string,
  strAlcoholic: PropTypes.string,
  strIBA: PropTypes.string,
  strVideo: PropTypes.string,
};
