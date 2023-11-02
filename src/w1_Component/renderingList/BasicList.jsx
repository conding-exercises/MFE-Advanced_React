const desserts = [
    {
        name: "Chocolate Cake",
        calories: 400,
        createdAt: "2022-09-01",
    },
    {
        name: "Ice Cream",
        calories: 200,
        createdAt: "2022-01-02",
    },
    {
        name: "Tiramisu",
        calories: 300,
        createdAt: "2021-10-03",
    },
    {
        name: "Cheesecake",
        calories: 600,
        createdAt: "2022-01-04",
    },
];

const DessertsList = (props) => {
    //The list should be sorted by calories in an ascending manne
    const desserts = props.data
    desserts.sort((d1, d2) => {
        return d1.calories - d2.calories
    })

    //any desserts with more than 500 calories should be excluded
    const filterdDesserts = desserts.filter(dessert => dessert.calories < 500)

    //Rendering

    const topDesserts = filterdDesserts.map(dessert => {
        return <li>{`${dessert.name} - ${dessert.calories}Kcal`}</li>
    })

    return (
        <ul>
            {topDesserts}
        </ul>
    )
}

export default function BasicList() {
    return (
        <div>
            <h2>List of low calorie desserts:</h2>
            <DessertsList data={desserts} />
        </div>
    )
}