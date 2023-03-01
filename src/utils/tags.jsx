// react-bootstrap
import { Badge } from "react-bootstrap";

// ----------------------------------------------------------------------

export const getTagsList = (strTags) => {
  if (!strTags) return [];

  const tags = strTags.split(",").map((tag) => {
    return (
      <Badge key={tag} bg="secondary" className="me-2">
        {tag.trim()}
      </Badge>
    );
  });

  return tags;
};
