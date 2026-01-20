import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`relative h-64 md:h-full ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    By {testimonial.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {testimonial.quote}
                  </p>
                  <p className="text-right font-bold text-gray-800">
                    {testimonial.name}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
