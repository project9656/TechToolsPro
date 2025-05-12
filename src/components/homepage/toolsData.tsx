
import React from 'react';
import { 
  FileUp, FilePlus2, FileText, Settings2, ChevronRight, Star, Users,
  FileOutput, FileMinus2, FileSearch, FileWarning, FileX2, FileCheck2,
  Lock, Unlock, ImagePlus, Type, RotateCw, Scissors, Download, Share2,
  FileSignature, FileKey, FileJson, FileCode2, FileArchive, Table,
  Languages, Stamp, QrCode, Palette, Grid, ArrowUpDown, ArrowLeftRight,
  FileInput, Scale, Shield, Pencil, Eraser, Wrench, Image, Crop, 
  Maximize2, Minimize2, GalleryHorizontalEnd, Scan, Camera, Hash, Search,
  Globe2, Link2, Gauge, MessageSquare, Calculator, Binary, Percent,
  Calendar, HeartPulse, DollarSign, Clock, Ruler, Weight, Thermometer,
  Database, KeyRound, LockKeyhole, Command, Link, 
  MapPin, Award, Youtube, Instagram, Twitter, Facebook, Video, Tag, Smile, 
  BarChart, Printer, FileSpreadsheet, BookOpen, Bot, Map, Dices, 
  Zap, FileEdit, Eye, FileCheck, FileX, FileLock2, 
  FileImage, FileText as FileDoc, FileSpreadsheet as FileXls, FileCode,
  Scan as ScanIcon, FileSearch2, EyeOff, 
  RotateCcw, FileStack, Upload,
  FilePlus, FileMinus, Edit,
  Image as ImageIcon, FileSignature as SignIcon, Stamp as WatermarkIcon,
  RotateCw as RotateIcon, Globe2 as HtmlIcon, Lock as LockIcon,
  Unlock as UnlockIcon, ListOrdered as OrganizeIcon, Archive as ArchiveIcon,
  Wrench as RepairIcon, Hash as PageNumbersIcon, ScanLine as ScanPdfIcon,
  FileSearch as OcrIcon, GitCompare as CompareIcon, EyeOff as RedactIcon,
  IndianRupee, LayoutGrid
} from 'lucide-react';

export interface Tool {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  isNew?: boolean;
  category?: string;
}

export interface ToolCategory {
  name: string;
  tools: Tool[];
}

export const allToolCategories: ToolCategory[] = [
  {
    name: "PDF Tools",
    tools: [
      { 
        icon: <FileStack />, 
        title: 'Merge PDF', 
        desc: 'Combine PDFs in the order you want with the easiest PDF merger available',
        href: '/tools/merge-pdf',
        isNew: false
      },
      { 
        icon: <FileMinus />, 
        title: 'Split PDF', 
        desc: 'Separate one page or a whole set for easy conversion into independent PDF files',
        href: '/tools/split-pdf',
        isNew: false
      },
      { 
        icon: <Minimize2 />, 
        title: 'Compress PDF', 
        desc: 'Reduce file size while optimizing for maximal PDF quality',
        href: '/tools/compress-pdf',
        isNew: false
      },
      { 
        icon: <FileDoc />, 
        title: 'PDF to Word', 
        desc: 'Convert PDF files into easy to edit DOC and DOCX documents with high accuracy',
        href: '/tools/pdf-to-word',
        isNew: false
      },
      { 
        icon: <FileSpreadsheet />, 
        title: 'PDF to PowerPoint', 
        desc: 'Turn your PDF files into easy to edit PPT and PPTX slideshows',
        href: '/tools/pdf-to-powerpoint',
        isNew: false
      },
      { 
        icon: <FileXls />, 
        title: 'PDF to Excel', 
        desc: 'Convert PDF files into Excel spreadsheets quickly',
        href: '/tools/pdf-to-excel',
        isNew: false
      },
      { 
        icon: <FileDoc />, 
        title: 'Word to PDF', 
        desc: 'Make DOC and DOCX files easy to read by converting them to PDF',
        href: '/tools/word-to-pdf',
        isNew: false
      },
      { 
        icon: <FileSpreadsheet />, 
        title: 'PowerPoint to PDF', 
        desc: 'Make PPT and PPTX slideshows easy to view by converting them to PDF',
        href: '/tools/powerpoint-to-pdf',
        isNew: false
      },
      { 
        icon: <FileXls />, 
        title: 'Excel to PDF', 
        desc: 'Make EXCEL spreadsheets easy to read by converting them to PDF',
        href: '/tools/excel-to-pdf',
        isNew: false
      },
      { 
        icon: <Edit />, 
        title: 'Edit PDF', 
        desc: 'Add text, images, shapes or freehand annotations to a PDF document',
        href: '/tools/edit-pdf',
        isNew: true
      },
      { 
        icon: <ImageIcon />, 
        title: 'PDF to JPG', 
        desc: 'Convert each PDF page into a JPG or extract all images contained in a PDF',
        href: '/tools/pdf-to-jpg',
        isNew: false
      },
      { 
        icon: <ImageIcon />, 
        title: 'JPG to PDF', 
        desc: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins',
        href: '/tools/jpg-to-pdf',
        isNew: false
      },
      { 
        icon: <SignIcon />, 
        title: 'Sign PDF', 
        desc: 'Sign yourself or request electronic signatures from others',
        href: '/tools/sign-pdf',
        isNew: false
      },
      { 
        icon: <WatermarkIcon />, 
        title: 'Watermark', 
        desc: 'Stamp an image or text over your PDF in seconds',
        href: '/tools/watermark-pdf',
        isNew: false
      },
      { 
        icon: <RotateIcon />, 
        title: 'Rotate PDF', 
        desc: 'Rotate your PDFs the way you need them. Rotate multiple PDFs at once',
        href: '/tools/rotate-pdf',
        isNew: false
      },
      { 
        icon: <HtmlIcon />, 
        title: 'HTML to PDF', 
        desc: 'Convert webpages in HTML to PDF with a single click',
        href: '/tools/html-to-pdf',
        isNew: false
      },
      { 
        icon: <UnlockIcon />, 
        title: 'Unlock PDF', 
        desc: 'Remove PDF password security to freely use your PDFs',
        href: '/tools/unlock-pdf',
        isNew: false
      },
      { 
        icon: <LockIcon />, 
        title: 'Protect PDF', 
        desc: 'Protect PDF files with a password to prevent unauthorized access',
        href: '/tools/protect-pdf',
        isNew: false
      },
      { 
        icon: <OrganizeIcon />, 
        title: 'Organize PDF', 
        desc: 'Sort, delete or add PDF pages to your document',
        href: '/tools/organize-pdf',
        isNew: false
      },
      { 
        icon: <ArchiveIcon />, 
        title: 'PDF to PDF/A', 
        desc: 'Transform your PDF to PDF/A for long-term archiving',
        href: '/tools/pdf-to-pdfa',
        isNew: false
      },
      { 
        icon: <RepairIcon />, 
        title: 'Repair PDF', 
        desc: 'Repair damaged PDF and recover data from corrupt PDF files',
        href: '/tools/repair-pdf',
        isNew: false
      },
      { 
        icon: <PageNumbersIcon />, 
        title: 'Page Numbers', 
        desc: 'Add page numbers into PDFs with customizable positions and typography',
        href: '/tools/add-page-numbers',
        isNew: false
      },
      { 
        icon: <ScanPdfIcon />, 
        title: 'Scan to PDF', 
        desc: 'Capture document scans from your mobile device instantly',
        href: '/tools/scan-to-pdf',
        isNew: false
      },
      { 
        icon: <OcrIcon />, 
        title: 'OCR PDF', 
        desc: 'Convert scanned PDF into searchable and selectable documents',
        href: '/tools/ocr-pdf',
        isNew: false
      },
      { 
        icon: <CompareIcon />, 
        title: 'Compare PDF', 
        desc: 'Show side-by-side document comparison to spot changes between versions',
        href: '/tools/compare-pdf',
        isNew: true
      },
      { 
        icon: <RedactIcon />, 
        title: 'Redact PDF', 
        desc: 'Permanently remove sensitive information from PDF documents',
        href: '/tools/redact-pdf',
        isNew: true
      }
    ]
  },
  {
    name: "Image Tools",
    tools: [
      { 
        icon: <Image />, 
        title: 'HEIC to JPG', 
        desc: 'Convert HEIC images to JPG format', 
        href: '/tools/heic-to-jpg',
        isNew: true 
      },
      { 
        icon: <Image />, 
        title: 'WEBP to JPG', 
        desc: 'Convert WEBP images to JPG format', 
        href: '/tools/webp-to-jpg',
        isNew: true 
      },
      { 
        icon: <Image />, 
        title: 'JPEG to PNG', 
        desc: 'Convert JPEG images to PNG format', 
        href: '/tools/jpeg-to-png',
        isNew: true 
      },
      { 
        icon: <Image />, 
        title: 'PNG to JPEG', 
        desc: 'Convert PNG images to JPEG format', 
        href: '/tools/png-to-jpeg',
        isNew: true 
      },
      { 
        icon: <FileText />, 
        title: 'JPG to Text', 
        desc: 'Extract text from JPG images', 
        href: '/tools/jpg-to-text',
        isNew: true 
      },
      { 
        icon: <FileText />, 
        title: 'PNG to Text', 
        desc: 'Extract text from PNG images', 
        href: '/tools/png-to-text',
        isNew: true 
      },
      { 
        icon: <FileDoc />, 
        title: 'JPG to PDF (50KB)', 
        desc: 'Convert JPG to PDF under 50KB', 
        href: '/tools/jpg-to-pdf-50kb',
        isNew: true 
      },
      { 
        icon: <FileDoc />, 
        title: 'JPG to PDF (100KB)', 
        desc: 'Convert JPG to PDF under 100KB', 
        href: '/tools/jpg-to-pdf-100kb',
        isNew: true 
      },
      { 
        icon: <FileDoc />, 
        title: 'JPEG to PDF (200KB)', 
        desc: 'Convert JPEG to PDF under 200KB', 
        href: '/tools/jpeg-to-pdf-200kb',
        isNew: true 
      },
      { 
        icon: <FileDoc />, 
        title: 'JPG to PDF (300KB)', 
        desc: 'Convert JPG to PDF under 300KB', 
        href: '/tools/jpg-to-pdf-300kb',
        isNew: true 
      },
      { 
        icon: <FileDoc />, 
        title: 'JPG to PDF (500KB)', 
        desc: 'Convert JPG to PDF under 500KB', 
        href: '/tools/jpg-to-pdf-500kb',
        isNew: true 
      },
      { icon: <Image />, title: 'Image to PNG', desc: 'Convert images to PNG format', href: '/tools/image-to-png' },
      { icon: <ImagePlus />, title: 'Image to JPG', desc: 'Convert images to JPG format', href: '/tools/image-to-jpg' },
      { icon: <Maximize2 />, title: 'Image Resizer', desc: 'Resize images to any dimension', href: '/tools/image-resizer' },
      { icon: <Minimize2 />, title: 'Image Compressor', desc: 'Compress image file size', href: '/tools/image-compressor' },
      { icon: <Crop />, title: 'Image Cropper', desc: 'Crop images precisely', href: '/tools/image-cropper' },
      { icon: <FileCode2 />, title: 'Image to Base64', desc: 'Convert images to Base64', href: '/tools/image-to-base64' },
      { icon: <GalleryHorizontalEnd />, title: 'WebP to PNG', desc: 'Convert WebP to PNG format', href: '/tools/webp-to-png' },
      { icon: <Camera />, title: 'Screenshot to PDF', desc: 'Convert screenshots to PDF', href: '/tools/screenshot-to-pdf' }
    ]
  },
  {
    name: "SEO Tools",
    tools: [
      { icon: <FileJson />, title: 'Meta Tag Generator', desc: 'Generate meta tags', href: '/tools/meta-tag-generator' },
      { icon: <Hash />, title: 'Keyword Density', desc: 'Check keyword density', href: '/tools/keyword-density' },
      { icon: <FileArchive />, title: 'Sitemap Generator', desc: 'Generate XML sitemaps', href: '/tools/sitemap-generator' },
      { icon: <FileText />, title: 'Robots.txt Generator', desc: 'Create robots.txt files', href: '/tools/robots-txt-generator' },
      { icon: <Search />, title: 'Google Index Checker', desc: 'Check Google indexing', href: '/tools/google-index-checker' },
      { icon: <Globe2 />, title: 'Domain Authority', desc: 'Check domain authority', href: '/tools/domain-authority' },
      { icon: <Link2 />, title: 'Backlink Checker', desc: 'Analyze backlinks', href: '/tools/backlink-checker' },
      { icon: <Gauge />, title: 'Page Speed Checker', desc: 'Test page loading speed', href: '/tools/page-speed-checker' }
    ]
  },
  {
    name: "Text Tools",
    tools: [
      { icon: <Type />, title: 'Word Counter', desc: 'Count words in text', href: '/tools/word-counter' },
      { icon: <FileText />, title: 'Character Counter', desc: 'Count characters', href: '/tools/character-counter' },
      { icon: <ArrowUpDown />, title: 'Case Converter', desc: 'Convert text case', href: '/tools/case-converter' },
      { icon: <Search />, title: 'Plagiarism Checker', desc: 'Check for plagiarism', href: '/tools/plagiarism-checker' },
      { icon: <MessageSquare />, title: 'Grammar Checker', desc: 'Check grammar', href: '/tools/grammar-checker' },
      { icon: <FileSignature />, title: 'Fancy Text Generator', desc: 'Create fancy text styles', href: '/tools/fancy-text' },
      { icon: <Type />, title: 'Random Text Generator', desc: 'Generate random text', href: '/tools/random-text' }
    ]
  },
  {
    name: "Developer Tools",
    tools: [
      { icon: <FileJson />, title: 'JSON Formatter', desc: 'Format JSON data', href: '/tools/json-formatter' },
      { icon: <FileCode2 />, title: 'HTML to Markdown', desc: 'Convert HTML to Markdown', href: '/tools/html-to-markdown' },
      { icon: <Minimize2 />, title: 'CSS Minifier', desc: 'Minify CSS code', href: '/tools/css-minifier' },
      { icon: <Minimize2 />, title: 'JavaScript Minifier', desc: 'Minify JavaScript code', href: '/tools/js-minifier' },
      { icon: <Database />, title: 'SQL Formatter', desc: 'Format SQL queries', href: '/tools/sql-formatter' },
      { icon: <FileCode2 />, title: 'Color Code Picker', desc: 'Pick color codes', href: '/tools/color-picker' },
      { icon: <Binary />, title: 'Base64 Tools', desc: 'Encode/Decode Base64', href: '/tools/base64' }
    ]
  },
  {
    name: "Math & Calculators",
    tools: [
      { icon: <Percent />, title: 'Percentage Calculator', desc: 'Calculate percentages', href: '/tools/percentage-calc' },
      { icon: <Calendar />, title: 'Age Calculator', desc: 'Calculate age', href: '/tools/age-calculator' },
      { icon: <HeartPulse />, title: 'BMI Calculator', desc: 'Calculate BMI', href: '/tools/bmi-calculator' },
      { icon: <DollarSign />, title: 'Loan Calculator', desc: 'Calculate loan EMI', href: '/tools/loan-calculator' },
      { icon: <Calculator />, title: 'Scientific Calculator', desc: 'Advanced calculations', href: '/tools/scientific-calc' },
      { 
        icon: <IndianRupee />, 
        title: '7th CPC Calculator', 
        desc: 'Calculate salary as per 7th Pay Commission', 
        href: '/tools/7th-cpc-calculator',
        isNew: true
      },
      { 
        icon: <Calculator />, 
        title: 'GST Calculator', 
        desc: 'Calculate GST and final price', 
        href: '/tools/gst-calculator',
        isNew: true
      }
    ]
  },
  {
    name: "Unit Converters",
    tools: [
      { icon: <Ruler />, title: 'Length Converter', desc: 'Convert length units', href: '/tools/length-converter' },
      { icon: <Weight />, title: 'Weight Converter', desc: 'Convert weight units', href: '/tools/weight-converter' },
      { icon: <Clock />, title: 'Time Converter', desc: 'Convert time zones', href: '/tools/time-converter' },
      { icon: <Thermometer />, title: 'Temperature Converter', desc: 'Convert temperature', href: '/tools/temp-converter' }
    ]
  },
  {
    name: "Security Tools",
    tools: [
      { icon: <KeyRound />, title: 'Password Generator', desc: 'Generate secure passwords', href: '/tools/password-generator' },
      { icon: <LockKeyhole />, title: 'Hash Generator', desc: 'Generate MD5/SHA256', href: '/tools/hash-generator' },
      { icon: <Command />, title: 'String Generator', desc: 'Generate random strings', href: '/tools/string-generator' },
      { icon: <Link />, title: 'URL Shortener', desc: 'Shorten long URLs', href: '/tools/url-shortener' },
      { icon: <MapPin />, title: 'IP Lookup', desc: 'Lookup IP information', href: '/tools/ip-lookup' }
    ]
  },
  {
    name: "Social Media Tools",
    tools: [
      { icon: <Youtube />, title: 'YouTube Tools', desc: 'YouTube utilities', href: '/tools/youtube-tools' },
      { icon: <Instagram />, title: 'Instagram Tools', desc: 'Instagram utilities', href: '/tools/instagram-tools' },
      { icon: <Twitter />, title: 'Twitter Tools', desc: 'Twitter utilities', href: '/tools/twitter-tools' },
      { icon: <Facebook />, title: 'Facebook Tools', desc: 'Facebook utilities', href: '/tools/facebook-tools' },
      { icon: <Video />, title: 'TikTok Tools', desc: 'TikTok utilities', href: '/tools/tiktok-tools' },
      { icon: <Tag />, title: 'Hashtag Generator', desc: 'Generate hashtags', href: '/tools/hashtag-generator' },
      { icon: <Smile />, title: 'Emoji Keyboard', desc: 'Copy and paste emojis', href: '/tools/emoji-keyboard' }
    ]
  },
  {
    name: "Miscellaneous",
    tools: [
      { icon: <BarChart />, title: 'Barcode Generator', desc: 'Generate barcodes', href: '/tools/barcode-generator' },
      { icon: <FileSpreadsheet />, title: 'Invoice Generator', desc: 'Create invoices', href: '/tools/invoice-generator' },
      { icon: <BookOpen />, title: 'E-book Creator', desc: 'Create e-books', href: '/tools/ebook-creator' },
      { icon: <Bot />, title: 'AI Chatbot Demo', desc: 'Try AI chatbot', href: '/tools/chatbot-demo' },
      { icon: <Map />, title: 'Address Generator', desc: 'Generate fake addresses', href: '/tools/address-generator' },
      { icon: <Dices />, title: 'Random Generator', desc: 'Generate random data', href: '/tools/random-generator' },
      { icon: <Zap />, title: 'Speed Test', desc: 'Test internet speed', href: '/tools/speed-test' }
    ]
  }
];

export default allToolCategories;
