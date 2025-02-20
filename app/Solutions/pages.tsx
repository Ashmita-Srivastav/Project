import fs from 'fs';
import path from 'path';
import ImageCard from '../cards';

interface Solution {
  title: string;
  description: string;
  imageUrl: string;
}

export default async function SolutionsPage() {
  const filePath = path.join(process.cwd(), 'public', 'solutions.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const solutions: Solution[] = JSON.parse(jsonData);

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-10xl font-extrabold text-center mb-8 ">Explore Reetape Solutions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {solutions.map((solution, index) => (
          <ImageCard 
            key={index}
            title={solution.title}
            description={solution.description}
            image={solution.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}