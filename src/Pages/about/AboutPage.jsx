const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years of industry experience",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Tech innovator with a passion for cutting-edge solutions",
    },
    {
      name: "Emma Williams",
      role: "Design Director",
      description: "Creative mind behind our stunning visual experiences",
    },
  ];

  return (
    <div className="theme-hero min-h-screen">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 animate-float text-5xl font-bold text-base-content">
              About EduBridge
            </h1>
            <p className="theme-muted mx-auto max-w-3xl text-xl">
              We help students, tutors, and admins collaborate in a cleaner,
              more connected learning experience.
            </p>
          </div>
        </div>

        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-64 w-64 rounded-full bg-primary/15 opacity-70"></div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <div className="h-64 w-64 rounded-full bg-secondary/15 opacity-70"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="theme-card p-8 transition-all duration-300 hover:scale-105">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
              <span className="text-sm font-semibold text-primary">Mission</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-base-content">Our Mission</h3>
            <p className="theme-muted">
              To deliver exceptional value through innovative solutions and unwavering commitment to excellence.
            </p>
          </div>

          <div className="theme-card p-8 transition-all duration-300 hover:scale-105">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15">
              <span className="text-sm font-semibold text-secondary">Vision</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-base-content">Our Vision</h3>
            <p className="theme-muted">
              To be the global leader in creating transformative digital experiences that inspire and empower.
            </p>
          </div>

          <div className="theme-card p-8 transition-all duration-300 hover:scale-105">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
              <span className="text-sm font-semibold text-accent">Values</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-base-content">Our Values</h3>
            <p className="theme-muted">
              Innovation, integrity, and excellence guide everything we do as we strive to exceed expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-base-content">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="theme-card p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/15">
                <span className="text-lg font-semibold text-primary">Team</span>
              </div>
              <h3 className="mb-2 text-center text-xl font-semibold text-base-content">
                {member.name}
              </h3>
              <p className="mb-2 text-center font-medium text-secondary">{member.role}</p>
              <p className="theme-muted text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-neutral py-16 text-neutral-content">
        <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
          <p className="mb-8 text-neutral-content/80">
            We'd love to hear from you and discuss how we can help.
          </p>
          <button className="theme-btn-secondary rounded-full px-8 py-3 font-semibold shadow-lg">
            Contact Us
          </button>
        </div>
      </div>

      <div className="flex justify-center space-x-2 bg-neutral py-8">
        <div className="h-3 w-3 rounded-full bg-primary animate-bounce-slow"></div>
        <div className="h-3 w-3 rounded-full bg-secondary animate-bounce-slow delay-100"></div>
        <div className="h-3 w-3 rounded-full bg-accent animate-bounce-slow delay-200"></div>
      </div>
    </div>
  );
};

export default AboutPage;
