export default function Avatar(props: { src: string; alt: string }) {
  const { src, alt } = props;
  return (
    <img
      src={src}
      alt={alt || "Avatar"}
      className="w-20 h-20 rounded-full object-cover"
      // Adjust the width and height classes as needed (e.g., w-32 h-32 for a larger avatar)
    />
  );
}
