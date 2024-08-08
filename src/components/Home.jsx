import Table from "./table/Table";

function Home(){

    const data = [
    {
        avatar: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
        name: 'Hart Hagerty',
        country: 'United States',
        jobTitle: 'Zemlak, Daniel and Leannon',
        jobDescription: 'Desktop Support Technician',
        favoriteColor: 'Purple'
    },
    {
        avatar: 'https://img.daisyui.com/images/profile/demo/3@94.webp',
        name: 'Brice Swyre',
        country: 'China',
        jobTitle: 'Carroll Group',
        jobDescription: 'Tax Accountant',
        favoriteColor: 'Red'
    },
    {
        avatar: 'https://img.daisyui.com/images/profile/demo/4@94.webp',
        name: 'Marjy Ferencz',
        country: 'Russia',
        jobTitle: 'Rowe-Schoen',
        jobDescription: 'Office Assistant I',
        favoriteColor: 'Crimson'
    },
    {
        avatar: 'https://img.daisyui.com/images/profile/demo/5@94.webp',
        name: 'Yancy Tear',
        country: 'Brazil',
        jobTitle: 'Wyman-Ledner',
        jobDescription: 'Community Outreach Specialist',
        favoriteColor: 'Indigo'
    }
    ];
  return (
    <div>
      <h1 className="text-blue-900">Home</h1>
      <p>Welcome to the Home page!</p>

      <Table data={data}/>
    </div>
  );
};

export default Home;