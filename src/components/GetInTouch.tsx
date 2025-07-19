import contacts from "../data/contacts.json";

export const GetInTouch = () => {

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
      {contacts.map((contact) => (
        <a
          target="_blank"
          key={contact.id}
          href={contact.link}
          className="grid w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-700"
        >
          <img
            src={contact.path}
            alt="LinkedIn Logo"
            className="self-center w-5 h-5 justify-self-center"
          />
        </a>
      ))}
    </div>
  );
};
