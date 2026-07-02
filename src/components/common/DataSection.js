import PropTypes from "prop-types";
import NoDataFound from "./NoDataFound";

function DataSection({ loading, data, skeleton, emptyMessage, children }) {
	if (loading) return skeleton;

	if (!data || data.length === 0)
		return <NoDataFound description={emptyMessage} />;
	return children;
}

DataSection.propTypes = {
	loading: PropTypes.bool.isRequired,
	data: PropTypes.array.isRequired,
	skeleton: PropTypes.node.isRequired,
	emptyMessage: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default DataSection;
