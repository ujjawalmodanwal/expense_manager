const userInfo = JSON.parse(localStorage.getItem("userInfo"));

const fetchCardsData = async()=>{
    const {data} = await axios.get("/api/cards/", {
        headers:{
            "Authorization": `Bearer ${userInfo.token}`
        }})
    const CardsData = data;
    updateCardsData(CardsData);
}
useEffect(()=>{
    fetchCardsData();
}, [])


