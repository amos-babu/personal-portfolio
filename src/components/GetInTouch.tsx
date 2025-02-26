import contacts from "../data/contacts.json";

export const GetInTouch = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {contacts.map((contact) => (
        <a
          key={contact.id}
          href={contact.link}
          className="grid w-10 h-10 bg-gray-400 rounded-md"
        >
          <img
            src={contact.path}
            alt="LinkedIn Logo"
            className="self-center w-8 h-8 justify-self-center"
          />
        </a>
      ))}
    </div>
  );
};
