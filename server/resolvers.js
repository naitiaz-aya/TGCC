const Sector = require("./Sector");

//Resolvers
const resolvers = {
	Query: {
	  getAll: async () => {
		return await Sector.find();
	  },
	},
	Mutation: {
	  createSector: async (parent, args, context, info) => {
		const { title, description } = args.sector;
		const sector = await new Sector({ title, description }).save();
		return sector;
	  },
	  updateSector: async (parent, args, context, info) => {
		const { id } = args;
		const { title, description } = args.sector;
		const sector = await Sector.findByIdAndUpdate(
		  id,
		  { title, description },
		  { new: true }
		);
		return sector;
	  },
	  deleteSector: async (parent, args, context, info) => {
		const { id } = args;
		await Sector.findByIdAndDelete(id);
		return "Deleted";
	  },
	},
  };
  module.exports = resolvers;