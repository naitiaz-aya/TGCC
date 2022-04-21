import React from 'react';
import ReactDOM from 'react-dom';
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_SECTOR, DELETE_SECTOR } from "../../GraphQL/Mutation";
import { getALL } from "../../GraphQL/Query";
import { useState } from "react";
export default function App() {
	const { loading, error, data } = useQuery(getALL);
	const [createSector, { err }] = useMutation(CREATE_SECTOR);
	const [deleteSector, { errr }] = useMutation(DELETE_SECTOR);
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	if (loading) return "Loading";
	const addSector = () => {
	  createSector({
		variables: {
		  title: title,
		  description: description,
		},
	  });
	};
	const removeSector = (id) => {
	  deleteSector({
		variables: {
		  id: id,
		},
	  });
	};
  return (

	<div className="App">
		Hello World
	{/* {data.getAll.map((data) => (
	  <>
		<p key={data.title}>
		  {data.title}----{data.description}
		</p>
		<button onClick={() => removeSector(data.id)}> Delete it </button>
	  </>
	))}
	<br />
	Title--- <input onChange={(e) => setTitle(e.target.value)} />
	<br />
	Description ---
	<input onChange={(e) => setDescription(e.target.value)} />
	<br />
	<button onClick={() => addSector()}>Add Post</button> */}
  </div>

	  );
}
