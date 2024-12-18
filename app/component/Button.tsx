interface ButtonProps {
  text: string;
  classNames: string;
  imgSrc?: string; // Optional image source
}
export default function Button({ text, classNames, imgSrc }: ButtonProps) {
  return (
    <div
      className={`bg-black mb-4 px-4 text-white text-center cursor-pointer hover:bg-transparent border-2 border-black hover:text-black transition-all duration-300 ease-in-out ${classNames}`}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={text}
          className="object-cover w-6 h-6 rounded-full" // Adjust width, height as needed
        />
      ) : (
        <span>{text}</span> // Default text if no image is provided
      )}
    </div>
  );
}
