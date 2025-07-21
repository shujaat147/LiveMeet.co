import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QRCodeSVG } from "qrcode.react";
import { useInView } from "react-intersection-observer";
import {
  MessageCircle,
  Image,
  Phone,
  Shield,
  Globe,
  Download,
  QrCode,
  Smartphone,
  Users,
  Zap,
  Star,
  CheckCircle,
  Languages,
} from "lucide-react";
import heroImage from "/lovable-uploads/banner.png";
import chatTranslationImage from "/lovable-uploads/text.png";
import imageTranslationImage from "/lovable-uploads/imagetrnslte.png";
import voiceCallingImage from "/lovable-uploads/voicecall.png";
import logoImage from "/lovable-uploads/logo.png";
import scannerImage from "/lovable-uploads/scanner.png";
import dsuImage from "/lovable-uploads/dsu.png";

const LiveMeetLanding = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
  });
  const [featuresRef, featuresInView] = useInView({
    threshold: 0.1,
  });
  const [downloadRef, downloadInView] = useInView({
    threshold: 0.1,
  });
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const downloadUrl =
    "https://expo.dev/artifacts/eas/9MD98fJhRQ6se2hByqyz1p.apk";
  const handleDownload = () => {
    window.open(downloadUrl, "_blank");
  };
  const features = [
    {
      icon: MessageCircle,
      title: "Real-time Chat Translation",
      description:
        "Instantly translate messages in 70+ languages for seamless communication.",
      image: chatTranslationImage,
    },
    {
      icon: Image,
      title: "Image Text Translation",
      description:
        "Upload images with text and get instant OCR-powered translations.",
      image: imageTranslationImage,
    },
    {
      icon: Phone,
      title: "Voice Calling",
      description: "Crystal clear High-quality voice communication.",
      image: voiceCallingImage,
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description:
        "Your conversations are protected with military-grade encryption.",
    },
    {
      icon: Users,
      title: "Group Chats",
      description:
        "Create multilingual group conversations with unlimited participants.",
    },
    {
      icon: Zap,
      title: "Instant Translation",
      description:
        "Lightning-fast translations powered by Microsoft Azure Translator.",
    },
  ];
  const stats = [
    {
      number: "70+",
      label: "Languages Supported",
    },
    {
      number: "FYP",
      label: "Project Status",
    },
    {
      number: "99.9%",
      label: "Translation Accuracy",
    },
    {
      number: "24/7",
      label: "Development Support",
    },
  ];
  const teamMembers = [
    {
      name: "Shujaat Hussain",
      role: "Team Lead",
      id: "Se211001",
    },
    {
      name: "Sahil Munaf",
      role: "Developer",
      id: "Se211039",
    },
    {
      name: "Nayab Nazish Mussani",
      role: "Developer",
      id: "Se211020",
    },
    {
      name: "Muzammil Jan",
      role: "Developer",
      id: "Se211010",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="LiveMeet Logo" className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button
              className="bg-transparent border-none text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              style={{ outline: "none" }}
              onClick={() => scrollToSection("features")}
              type="button"
            >
              Features
            </button>
            <button
              className="bg-transparent border-none text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              style={{ outline: "none" }}
              onClick={() => scrollToSection("download")}
              type="button"
            >
              Download
            </button>
            <button
              className="bg-transparent border-none text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              style={{ outline: "none" }}
              onClick={() => scrollToSection("team")}
              type="button"
            >
              Team
            </button>
          </nav>
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection("download")}
          >
            <Download className="w-4 h-4" />
            Download Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 ${
                heroInView ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Star className="w-3 h-3 mr-1" />
                  DHA Suffa University FYP
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Break Language
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {" "}
                    Barriers
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  LiveMeet enables real-time multilingual communication with
                  instant text and image translation in a secure chat platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" onClick={handleDownload}>
                  <Download className="w-5 h-5" />
                  Download APK
                </Button>
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={() => scrollToSection("qr-code")}
                >
                  <QrCode className="w-5 h-5" />
                  Scan QR Code
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative ${
                heroInView ? "animate-float" : "opacity-0"
              }`}
            >
              <div className="relative">
                <img
                  src={heroImage}
                  alt="LiveMeet App"
                  className="w-full h-auto rounded-2xl shadow-glow"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className="py-20 bg-gradient-card"
      >
        <div className="container">
          <div
            className={`text-center space-y-4 mb-16 ${
              featuresInView ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <Badge variant="secondary">
              <Languages className="w-3 h-3 mr-1" />
              Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Everything You Need for
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {" "}
                Global Communication
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              LiveMeet combines cutting-edge translation technology with secure
              messaging to create the ultimate multilingual chat experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 ${
                  featuresInView ? "animate-slide-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6 space-y-4">
                  {feature.image && (
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg bg-card border border-border/50 ${
                  featuresInView ? "animate-slide-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${(index + 3) * 100}ms`,
                }}
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" ref={downloadRef} className="py-20">
        <div className="container">
          <div
            className={`max-w-4xl mx-auto text-center space-y-12 ${
              downloadInView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="space-y-4">
              <Badge variant="secondary">
                <Smartphone className="w-3 h-3 mr-1" />
                Download
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold">
                Get LiveMeet
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {" "}
                  Today
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Download the APK directly or scan the QR code to start breaking
                language barriers instantly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-card border-border/50">
                  <CardContent className="space-y-6">
                    <h3 className="text-2xl font-semibold">Direct Download</h3>
                    <p className="text-muted-foreground">
                      Download the latest version of LiveMeet APK directly to
                      your Android device.
                    </p>
                    <Button
                      variant="download"
                      size="lg"
                      className="w-full"
                      onClick={handleDownload}
                    >
                      <Download className="w-5 h-5" />
                      Download APK (50 MB)
                    </Button>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Safe & Secure Download</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div id="qr-code" className="space-y-6">
                <Card className="p-8 bg-gradient-card border-border/50">
                  <CardContent className="space-y-6 text-center">
                    <h3 className="text-2xl font-semibold">Scan QR Code</h3>
                    <p className="text-muted-foreground">
                      Scan this QR code with your phone to download LiveMeet
                      instantly.
                    </p>
                    <div className="flex justify-center">
                      <div className="p-4 bg-white rounded-xl shadow-card">
                        <img
                          src={scannerImage}
                          alt="LiveMeet QR Code"
                          className="w-44 h-44 object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <QrCode className="w-4 h-4" />
                      <span>Point your camera at the QR code</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold mb-2">System Requirements</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>📱 Android 7.0+</div>
                <div>💾 100MB free space</div>
                <div>🌐 Internet connection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary">
              <Users className="w-3 h-3 mr-1" />
              Team
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Meet the
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {" "}
                Developers
              </span>
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src={dsuImage}
                alt="DHA Suffa University"
                className="h-16 w-16"
              />
              <div className="text-left">
                <p className="text-lg font-semibold">DHA Suffa University</p>
                <p className="text-muted-foreground">
                  Department of Computer Science
                </p>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Final Year Project team supervised by Ms. Yusra Shahina
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300"
              >
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {member.id}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Supervised by{" "}
              <span className="font-semibold text-foreground">
                Ms. Yusra Shahina
              </span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Department of Computer Science, DHA Suffa University
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-[18px]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img
                src={logoImage}
                alt="LiveMeet Logo"
                className="h-10 w-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © 2025 Team LiveMeet
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default LiveMeetLanding;
