import Image from "next/image";
import PropTypes from "prop-types";

export default function HeroCard({ title, description, imgUrl }) {
  return (
    <div className="w-full sm:w-80 rounded-lg shadow-md overflow-hidden bg-white mb-6 sm:mb-8">
      

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

HeroCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

HeroCard.defaultProps = {
  title: 'Default Title',
  description: 'Default Description',
  imgUrl: 'https://file.rendit.io/n/p.png'
};