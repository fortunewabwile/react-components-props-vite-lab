// About: logo image + blurb. Falls back to a placeholder if no image is passed.
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}
export default About;