import { FaStar } from "react-icons/fa";
import Header from "../General/Header";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.",
    rating: 5,
    image: "/images/FOTO.jpg",
  },
  {
    name: "John Doe",
    role: "Frontend Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.",
    rating: 5,
    image: "/images/FOTO.jpg",
  },
  {
    name: "John Doe",
    role: "Frontend Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.",
    rating: 5,
    image: "/images/FOTO.jpg",
  },
  {
    name: "John Doe",
    role: "Frontend Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.",
    rating: 5,
    image: "/images/FOTO.jpg",
  },
  {
    name: "John Doe",
    role: "Frontend Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.",
    rating: 5,
    image: "/images/FOTO.jpg",
  },
  {
    name: "John Doe",
    role: "Frontend Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.",
    rating: 5,
    image: "/images/FOTO.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div>
        <Header title="Testimonials" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] sm:w-[80%] mx-auto mt-12">
          {testimonials.map((testimonial, index) => {
            return (
              <div
                data-aos="fade-right"
                data-aos-delay={index * 100}
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`w-4 h-4 ${index < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="italic mb-6 text-gray-400">
                  &ldquo;{testimonial.content}&ldquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full">
                    <Image
                      src={testimonial.image}
                      alt="image"
                      className="object-cover rounded-full"
                      fill
                    />
                  </div>

                  <div className="py-4">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
