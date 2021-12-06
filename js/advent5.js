window.onload = () => {
    console.log("Hi friend");

    function dayToXmas(date) {
        const xMasDay = new Date("Dec 25, 2021 00:00:00");
        const diffTime = xMasDay.getTime() - date.getTime();
        const daystoXmas = Math.ceil(diffTime / (1000 * 3600 * 24));
        return daystoXmas;
    }

    const date1 = new Date("Dec 1, 2021");
    const date2 =  new Date("Dec 24, 2021 00:00:001");
    const date3 = new Date("Dec 24, 2021 23:59:59");
    const date4 = new Date("December 20, 2021 03:24:00");
    const date5 = new Date('Jan 1, 2022 23:59:59')
    const date6 = new Date('Dec 26, 2021')
    const date7 = new Date('Jan 1, 2021')
    const date8 = new Date('Dec 31, 2021')
    const date9 = new Date('Nov 20, 2021')

    const xMasDay = new Date("Dec 25, 2021 00:00:00");

    dayToXmas(date5);
}