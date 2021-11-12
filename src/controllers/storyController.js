export const trending = (req, res) => res.send("Trending");
export const somethingNew = (req, res) => res.send("New");
export const see = (req, res) => {
    return res.send(`See Story #${req.params.id}`);
};
export const edit = (req, res) => res.send("Edit");
export const deleteStory = (req, res) => res.send("Delete Story");