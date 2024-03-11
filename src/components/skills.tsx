export default function Skills() {
  return (
    <div className="rounded-lg p-4 md:p-4 bg-blue-500 text-white">
      <h2 className="text-2xl font-bold mb-2">Skills</h2>
      <ul className="text-base">
        <li>
          <span className="font-bold">Languages:</span> HTML, CSS, Javascript,
          Typescript
        </li>
        <li>
          <span className="font-bold">Frameworks:</span> Node.js, Express.js,
          Remix.js
        </li>
        <li>
          <span className="font-bold">Libraries:</span> React.js, jQuery
        </li>
        <li>
          <span className="font-bold">Databases:</span> SQL, MongoDB, GraphQL
        </li>
        <li>
          <span className="font-bold">Authorization:</span> Passport.js, Bcrypt
        </li>
        <li>
          <span className="font-bold">Testing:</span> Mocha, Chai, Cypress
        </li>
      </ul>
    </div>
  );
}
