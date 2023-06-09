const names =['Kohli', 'Saif', 'Arun', 'Aamir', 'Arif']

const listOfNames = () => {
    const listItems = names.map((name) =>
        <li key={name}>
            {name}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    )
}

export default listOfNames;