// "use client";
// import React, { useState } from "react";
// import PromptForm from "../components/PromptForm";

// const AIScreen = () => {
//   const [promptResult, setPromptResult] = useState<string | null>(null);

//   const handlePromptSubmit = (value: string) => {
//     console.log("Gelen prompt:", value);
//     // burada API'ye gönderim ya da işleme yapılabilir
//     setPromptResult(value);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">AI Görev Paneli</h1>
//       <PromptForm onSubmit={handlePromptSubmit} />
//       {promptResult && (
//         <div className="mt-6 p-4 bg-gray-100 rounded shadow">
//           <p className="text-gray-700 font-medium">Son Gönderilen Prompt:</p>
//           <p>{promptResult}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AIScreen;
