import { useEffect, useState } from "react";
import { getProjects } from "../services/wordpress";

export default function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects()
            .then(data => setProjects(data))
            .catch(err => console.log(err));
    }, []);


    return (
        <div>
            <h1>Projects</h1>

            {projects.map(project => (
                <div key={project.id}>

                    <h2>
                        {project.title.rendered}
                    </h2>

                    <p>
                        {project.acf.project_description}
                    </p>

                </div>
            ))}

        </div>
    );
}