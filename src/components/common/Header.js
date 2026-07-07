import PropTypes from "prop-types";
function Header({ monthCount }) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-800">
        Customer Rewards Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Reward points earned during the last {monthCount} months
      </p>
    </div>
  );
}

Header.propTypes = {
  monthCount: PropTypes.number.isRequired,
};
export default Header;
