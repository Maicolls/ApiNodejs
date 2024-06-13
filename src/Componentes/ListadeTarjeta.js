import React from "react";
import Tarjeta from "./Tarjeta";

const Lista=({exercises})=>(
    <div>
        {
                exercises.map((exercise)=>{
                    return(
                        <Tarjeta
                        key={exercise.id}
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
            />
                    )
                }
            )
            }
    </div>
)

export default Lista