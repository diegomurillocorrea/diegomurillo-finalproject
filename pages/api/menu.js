export async function getServerSideProps () {
    const defaultEndPointMenu = "https://api.elaniin.dev/api/menu";
    const resMenu = await fetch( defaultEndPointMenu );
    const fullDataMenu = await resMenu.json();
    const dataFullMenu = fullDataMenu.data;
    return {
        props: { 
            dataFullMenu
        }
    };
};