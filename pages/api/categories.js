export async function getServerSideProps () {
    const defaultEndPointCategories = "https://api.elaniin.dev/api/categories";
    const resCategories = await fetch( defaultEndPointCategories );
    const fullDataCategories = resCategories.json();
    const dataFullCategories = fullDataCategories.data;
    return {
        props: { 
            dataFullCategories
        }
    };
};