const SingleBlog = ({ params }) => {
  console.log(params.slag);

  const { title, description } = blogs.find(
    (blog) => blog.slug === params.slag
  );

  console.log(blogs.find((blog) => blog.slug === params.slag));
  return (
    <main className="flex h-full flex-col gap-5  justify-between p-24">
      <div className="bg-slate-100 shadow-md max-w-4xl w-full p-10 mx-auto">
        <h1 className="text-3xl font-bold underline mb-5">{title}</h1>
        <p className="text-slate-600 leading-loose text-justify text-lg">
          {description}
        </p>
      </div>
    </main>
  );
};
export default SingleBlog;

const blogs = [
  {
    slug: "latest-web-design-trends-2024",
    title: "Top Web Design Trends to Watch in 2024",
    description:
      "A deep dive into the most anticipated web design trends of 2024, from minimalist interfaces to advanced animations, and how they will shape the digital landscape.",
  },
  {
    slug: "ai-in-frontend-development",
    title: "How AI is Revolutionizing Frontend Development",
    description:
      "Explore how artificial intelligence is transforming frontend development, making processes faster, smarter, and more efficient for developers and designers alike.",
  },
  {
    slug: "5g-technology-impact",
    title: "The Impact of 5G Technology on Modern Communication",
    description:
      "An analysis of how 5G technology is changing the way we communicate, with faster speeds, lower latency, and its potential to revolutionize various industries.",
  },
  {
    slug: "cloud-computing-security-trends",
    title: "Top Cloud Computing Security Trends in 2024",
    description:
      "Stay ahead of the curve with the latest cloud security trends, ensuring your data and applications remain safe in the ever-evolving digital world.",
  },
  {
    slug: "the-future-of-iot",
    title: "The Future of IoT: What to Expect in the Next Decade",
    description:
      "Discover the future of the Internet of Things (IoT) and how it will continue to integrate into our daily lives, impacting everything from smart homes to industrial automation.",
  },
  {
    slug: "blockchain-beyond-cryptocurrency",
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    description:
      "Learn about the various real-world applications of blockchain technology beyond cryptocurrency, including supply chain management, healthcare, and voting systems.",
  },
  {
    slug: "sustainable-tech-innovations",
    title: "Sustainable Tech Innovations: Paving the Way for a Greener Future",
    description:
      "A look at the latest sustainable tech innovations that are helping to reduce environmental impact and promote a greener, more sustainable future.",
  },
  {
    slug: "ar-vr-trends-2024",
    title: "AR and VR Trends to Watch in 2024",
    description:
      "Get ready for the next wave of Augmented Reality (AR) and Virtual Reality (VR) trends that are set to change the gaming, education, and entertainment industries.",
  },
  {
    slug: "cybersecurity-challenges-solutions",
    title: "Cybersecurity Challenges and Solutions in the Digital Age",
    description:
      "An overview of the most pressing cybersecurity challenges facing businesses and individuals today, along with practical solutions to protect against digital threats.",
  },
  {
    slug: "quantum-computing-explained",
    title: "Quantum Computing Explained: The Next Frontier in Technology",
    description:
      "An introduction to quantum computing, breaking down complex concepts into understandable terms and exploring its potential to revolutionize industries.",
  },
];
