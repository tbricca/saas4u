interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <h1 style={{ fontSize: "2rem", textAlign: "center" }}>{title}</h1>
  );
};

export default Heading;