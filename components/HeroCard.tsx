"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackComponent() {
  return (
    <div className=" flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold  bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    content: (
      <img
        className="w-full h-full object-cover"
        src="https://t3.ftcdn.net/jpg/01/02/91/72/360_F_102917275_EwxqjeGA7qgl5Tmp9sI92iwhFZ623fM8.jpg"
        alt="1"
      />
    ),
  },
  {
    id: 1,
    content: (
      <img
        className="w-full h-full object-cover"
        src="https://thumbs.dreamstime.com/b/investigate-basic-facts-questions-check-list-investigation-word-checklist-asking-who-what-where-why-how-as-43806704.jpg"
        alt="1"
      />
    ),
  },
  {
    id: 2,
    content: (
      <img
        className="w-full h-full object-cover"
        src="https://media.istockphoto.com/id/1363488987/photo/detective-board-with-fingerprints-photos-map-and-clues-connected-by-red-string-on-white-brick.jpg?s=612x612&w=0&k=20&c=tM-x3PB-_hP7kVY5CBf3uPt2doTDrgkut-euQx_IjIk="
        alt="1"
      />
    ),
  },
];
