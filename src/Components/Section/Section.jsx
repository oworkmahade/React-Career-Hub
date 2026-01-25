import PropTypes from "prop-types";

export default function Section({ title, para = "" }) {
  return (
    <section className="text-center">
      <p className="text-4xl font-bold title"> {title}</p>
      <p className="my-2 text-gray-600">{para}</p>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  para: PropTypes.string,
};
