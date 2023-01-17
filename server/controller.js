module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}

module.exports ={
    getFortune: (req, res) => {
        const fortunes =["All will go well with your new project","A inch of time is an inch of gold","Any day above ground is a good day","All your hard work will soon pay off","Any decision you have to make tomorrow is a good decision"];

        let fortuneIndex = Math.floor(math.random() * fortunes.length);
        let randomFortune = fortunes[fortuneIndex];

        res.status(200).send(randomFortune);
    }
}