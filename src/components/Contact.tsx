export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            I&apos;m passionate about generative AI and seeking opportunities to
            build impactful products with this technology. Let&apos;s discuss
            how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--background-secondary)] border border-[var(--border-light)] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Email</p>
                  <a
                    href="mailto:rstrauss91@gmail.com"
                    className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    rstrauss91@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--background-secondary)] border border-[var(--border-light)] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Location
                  </p>
                  <p className="text-[var(--text-primary)]">
                    Toronto, Ontario, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              Find Me Online
            </h3>

            <div className="space-y-4">
              <a
                href="https://ca.linkedin.com/in/richard-strauss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-[var(--background-secondary)] border border-[var(--border-light)] rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-8 h-8 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)]">
                    LinkedIn
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Professional profile
                  </p>
                </div>
              </a>

              <a
                href="https://medium.com/@richardstrauss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-[var(--background-secondary)] border border-[var(--border-light)] rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-8 h-8 bg-[var(--text-primary)] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)]">
                    Medium
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Gen AI & LLM insights
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[var(--background-secondary)] border border-[var(--border-light)] rounded-lg p-8">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
              Ready to work together?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Whether you have a product opportunity in mind, want to discuss
              generative AI applications, or just want to connect, I&apos;d love
              to hear from you.
            </p>
            <a
              href="mailto:rstrauss91@gmail.com"
              className="inline-flex items-center bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Send Email
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-[var(--border-light)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[var(--text-secondary)] mb-4 md:mb-0">
              © 2025 Richard Strauss. Built with Next.js and Tailwind CSS.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://ca.linkedin.com/in/richard-strauss"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://medium.com/@richardstrauss"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                Medium
              </a>
              <a
                href="/Richard_Strauss_Resume.pdf"
                download="Richard_Strauss_Resume.pdf"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
