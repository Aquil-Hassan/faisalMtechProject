import React, { useState } from 'react';

const Home = () => {
  const [choice, setChoice] = useState("");
  const [thickness, setThickness] = useState("0.1");
  const [roughness, setRoughness] = useState("0.21");
  const [tolerance, setTolerance] = useState("0.016");
  const [mass, setMass] = useState("0.01");
  const [choiceshape, setChoiceshape] = useState("");
  const [result, setResult] = useState("");

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
      const response = await fetch('https://aquil.pythonanywhere.com/run', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setResult(data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <form onSubmit={handleSubmit} style={{ marginTop:"50px",marginBottom: "20px", width: "600px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid #ccc", padding: "20px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
          <label htmlFor="choice" style={{ marginRight: "10px", width: "150px" }}>Enter choice:</label>
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
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
          <label htmlFor="thickness" style={{ marginRight: "10px", width: "200px" }}>Enter thickness:</label>
          <input required type="range" id="thickness" min="0.1" max="1000" step="0.1" value={thickness} onChange={(e) => setThickness(e.target.value)} style={{ marginRight: "10px" }} />
          {thickness}mm
        </div>
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
          <label htmlFor="roughness" style={{ marginRight: "10px", width: "150px" }}>Enter roughness:</label>
          <input type="range" id="roughness" min="0.21" max="20" step="0.01" value={roughness} onChange={(e) => setRoughness(e.target.value)} style={{ marginRight: "10px" }} />
          {roughness}
        </div>
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
          <label htmlFor="tolerance" style={{ marginRight: "10px", width: "150px" }}>Enter tolerance:</label>
          <input type="range" id="tolerance" min="0.016" max="2.5" step="0.001" value={tolerance} onChange={(e) => setTolerance(e.target.value)} style={{ marginRight: "10px" }} />
          {tolerance}
        </div>
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
          <label htmlFor="mass" style={{ marginRight: "10px", width: "150px" }}>Enter mass:</label>
          <input type="range" id="mass" min="0.01" max="10000" step="0.01" value={mass} onChange={(e) => setMass(e.target.value)} style={{ marginRight: "10px" }} />
          {mass}kg
        </div>
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
          <label htmlFor="choiceshape" style={{ marginRight: "10px", width: "150px" }}>Enter shape choice:</label>
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
        <div>
          <button type='submit' style={{ backgroundColor: "blue", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>SUBMIT</button>
        </div>
      </form>
      <div style={{ fontSize: "24px", color: "red" }}><pre>{result}</pre></div>
    </div>
  );
}

export default Home;
