exports.createPages = ({ actions: { createPage } }) => {
    // getCarData is a function that fetches our data
    const allCars = [
        {
            name: 'Lotus',
            model: 'Elise'
        },
        {
            name: 'Nissan',
            model: '240SX'
        },
        {
            name: 'Subaru',
            model: 'BRZ'
        }
    ];

    createPage({
        path: '/cars',
        component: require.resolve('./src/templates/cars.js'),
        context: { allCars }
    })
}