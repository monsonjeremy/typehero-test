import Image from 'next/image';

export default function HeroTypeCard({typeHero}) {
    const { name, description, difficulty, username, image = "https://file.rendit.io/n/p.png"} = typeHero;

    const badgeColors = {
        "BEGINNER": "bg-pink-500",
        "EASY": "bg-green-500",
        "MEDIUM": "bg-yellow-500",
        "HARD": "bg-red-500",
        "EXTREME": "bg-orange-500"
    };

    const badgeColor = badgeColors[difficulty] || "bg-gray-300";

    return (
        <div className="flex flex-col m-4 shadow-lg rounded-lg border-2 border-gray-300">
            
            <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-gray-600">{description}</p>
                <div className="mt-5">
                    <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 ${badgeColor}`}>{difficulty}</span>
                    <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 bg-gray-500">{username}</span>
                </div>
            </div>
        </div>
    );
}

HeroTypeCard.defaultProps = {
    typeHero: {
        name: "Default Type Hero",
        description: "This is a description of the default hero type",
        difficulty: "EASY",
        username: "John Doe"
    }
};