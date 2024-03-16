import React, { useState } from 'react';
import './style.css'

const CastingProcessComponent = () => {
    const [choice, setChoice] = useState(1);
    const [thickness, setThickness] = useState("0.1");
    const [roughness, setRoughness] = useState("0.21");
    const [tolerance, setTolerance] = useState("0.016");
    const [mass, setMass] = useState("0.01");
    const [choiceshape, setChoiceshape] = useState(1);
    const [result, setResult] = useState("");

    const [choicePeocess, setChoicePeocess] = useState([]);
    const [thicknessPeocess, setThicknessPeocess] = useState([]);
    const [roughnessPeocess, setRoughnessPeocess] = useState([]);
    const [tolerancePeocess, setTolerancePeocess] = useState([]);
    const [massPeocess, setMassPeocess] = useState([]);
    const [choiceshapePeocess, setChoiceshapePeocess] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('choice', choice);
        formData.append('thickness', thickness);
        formData.append('roughness', roughness);
        formData.append('tolerance', tolerance);
        formData.append('mass', mass);
        formData.append('choiceshape', choiceshape);
        try {
            const response = await fetch('http://aquil.pythonanywhere.com/run', {
                method: 'POST',
                body: formData,
            });
            response.json()
                .then(data => {
                    // console.log(data);
                    // console.log(JSON.parse(data.result));
                    setResult(JSON.parse(data.result))
                    setChoicePeocess(JSON.parse(data.choice).CProcess)
                    setChoiceshapePeocess(JSON.parse(data.shape).CSProcess)
                    // console.log(choicePeocess);
                    setThicknessPeocess(JSON.parse(data.thickness).TProcess)
                    // console.log(thicknessPeocess);
                    setRoughnessPeocess(JSON.parse(data.roughness).RProcess)
                    // console.log(roughnessPeocess);
                    setTolerancePeocess(JSON.parse(data.tolerance).TOProcess)
                    // console.log(tolerancePeocess);
                    setMassPeocess(JSON.parse(data.mass).MProcess)
                })
                .catch(error => {
                    console.error('Error fetching data or processing choice:', error);
                });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='hhhh'>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

            <h2 style={{padding:"0px",margin:"0px"}}>MATPROSELECTOR</h2>
        </div>
            <form onSubmit={handleSubmit}>
                {/* <button type='submit'>SUBMIT</button> */}
                <div className='container' style={{ display: "flex" }}>
                    <div className="choice-container cc">
                        <div className="heading">
                            <label htmlFor="choice">Enter choice:</label><br /><br />
                            <select required id="choice" value={choice} onChange={(e) => setChoice(e.target.value)}>
                                <option value="">Select an option</option>
                                <option value="1">METALS, FERROUS</option>
                                <option value="2">METALS, NON FERROUS</option>
                                <option value="3">CERAMICS</option>
                                <option value="4">GLASSES</option>
                                <option value="5">ELASTOMERS</option>
                                <option value="6">THERMOPLASTICS</option>
                                <option value="7">THERMOSETS</option>
                                <option value="8">POLYMER FOAMS</option>
                                <option value="9">COMPOSITES</option>
                            </select>
                        </div>
                        <div className="processes">
                            {choicePeocess && (
                                Object.keys(choicePeocess).map((key) => (
                                    <li className={Object.values(result[0]).includes(choicePeocess[key]) ? "present" : "absent"} key={key}>{choicePeocess[key]}</li>
                                ))
                            )
                            }
                        </div>
                    </div>
                    <div className="thickness-container cc">
                        <div className="heading">

                            <label htmlFor="thickness" >Enter thickness:</label>
                            <br />Range:(0.1,1000)
                            <input required type="text" id="thickness" min="0.1" max="1000" step="0.1" value={thickness} onChange={(e) => setThickness(e.target.value)} style={{ marginRight: "10px" }} />
                        </div>
                        <div className="processes">

                            {thicknessPeocess && (

                                Object.keys(thicknessPeocess).map((key) => (
                                    <li className={Object.values(result[0]).includes(thicknessPeocess[key]) ? "present" : "absent"} key={key}>{thicknessPeocess[key]}</li>
                                ))
                            )
                            }
                        </div>
                    </div>
                    <div className="roughness-container cc">
                        <div className="heading">

                            <label htmlFor="roughness" >Enter roughness:</label>
                            <br />Range:(0.21,20)
                            <input type="text" id="roughness" min="0.21" max="20" step="0.01" value={roughness} onChange={(e) => setRoughness(e.target.value)} style={{ marginRight: "10px" }} />
                        </div>
                        <div className="processes">

                            {roughnessPeocess && (
                                Object.keys(roughnessPeocess).map((key) => (
                                    <li className={Object.values(result[0]).includes(roughnessPeocess[key]) ? "present" : "absent"} key={key}>{roughnessPeocess[key]}</li>
                                ))
                            )
                            }
                        </div>
                    </div>
                    <div className="tolerance-container cc">
                        <div className="heading">

                            <label htmlFor="tolerance" >Enter tolerance:</label>
                            <br />Range:(0.016,2.5)
                            <input type="text" id="tolerance" min="0.016" max="2.5" step="0.001" value={tolerance} onChange={(e) => setTolerance(e.target.value)} style={{ marginRight: "10px" }} />
                        </div>
                        <div className="processes">

                            {tolerancePeocess && (
                                Object.keys(tolerancePeocess).map((key) => (
                                    <li className={Object.values(result[0]).includes(tolerancePeocess[key]) ? "present" : "absent"} key={key}>{tolerancePeocess[key]}</li>
                                ))
                            )
                            }
                        </div>
                    </div>
                    <div className="mass-container cc">
                        <div className="heading">

                            <label htmlFor="mass" >Enter mass:</label>
                            <br />Range:(0.01,10000)
                            <input type="text" id="mass" min="0.01" max="10000" step="0.01" value={mass} onChange={(e) => setMass(e.target.value)} style={{ marginRight: "10px" }} />
                        </div>
                        <div className="processes">

                            {massPeocess && (
                                Object.keys(massPeocess).map((key) => (
                                    <li className={Object.values(result[0]).includes(massPeocess[key]) ? "present" : "absent"} key={key}>{massPeocess[key]}</li>
                                ))

                            )
                            }
                        </div>
                    </div>
                    <div className="shape-container cc">
                        <div className="heading">

                            <label htmlFor="choiceshape" >Enter shape choice:</label><br /><br />
                            <select required id="choiceshape" value={choiceshape} onChange={(e) => setChoiceshape(e.target.value)} style={{ marginRight: "10px" }}>
                                <option value="">Select a shape</option>
                                <option value="1">CIRCULAR PRISMATIC</option>
                                <option value="2">NON-CIRCULAR PRISMATIC</option>
                                <option value="3">FLAT SHEET</option>
                                <option value="4">DISHED SHEET</option>
                                <option value="5">3D SOLID</option>
                                <option value="6">3D HOLLOW</option>
                            </select>
                        </div>
                        <div className="processes">

                            {choiceshapePeocess && (

                                Object.keys(choiceshapePeocess).map((key) => (
                                    <li className={Object.values(result[0]).includes(choiceshapePeocess[key]) ? "present" : "absent"} key={key}>{choiceshapePeocess[key]}</li>
                                ))

                            )
                            }
                        </div>
                    </div>
                    <div className="final-container cc">
                        <div className="heading">
                            <button type='submit'>Click here to get Result</button>
                        </div>
                        <div className="processes final">
                            {result && (
                                Object.keys(result[0]).map((key) => (
                                    <li key={key}>{result[0][key]}</li>
                                ))
                            )
                            }
                        </div>
                    </div>
                </div>
            </form>
            <div class="unselectable">
                <pre>
                {"Md Faisal Shahab (MTech 2022-24)\nNIT WARANGAL \n22MEM6R06 "}
                </pre>
            </div>
        </div>
    );
};

export default CastingProcessComponent;