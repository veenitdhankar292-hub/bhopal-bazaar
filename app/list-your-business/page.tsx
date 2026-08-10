<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BhopalBazaar - Find Trusted Businesses in Bhopal</title>
    <meta name="description" content="Bhopal's complete local business directory. Find shops, services, markets & essential guides. List your business free.">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- ✅ EmailJS SDK ADDED -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
    <script type="text/javascript">
        // ✅ EmailJS Initialization with YOUR Public Key
        (function() {
            emailjs.init();
        })();
    </script>
    
    <!-- ✅ Firebase SDK ADDED -->
    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyDuGHxp-kDO-0ZAabyPZrfmNE4VDw2ORPQ",
            authDomain: "bhopalbazaar-ea660.firebaseapp.com",
            projectId: "bhopalbazaar-ea660",
            storageBucket: "bhopalbazaar-ea660.firebasestorage.app",
            messagingSenderId: "90049436487",
            appId: "1:90049436487:web:011b7ae9eb6c48ef8b4a62",
            measurementId: "G-JDTX0ZSWH4"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        console.log("Firebase initialized successfully!");
    </script>
    
    <style>
        /* Reset & Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary: #F57C00;
            --secondary: #1E6FA5;
            --accent: #4CAF50;
            --background: #F5F5F5;
            --dark: #333333;
            --light: #FFFFFF;
            --gray: #666666;
            --light-gray: #EEEEEE;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: var(--dark);
            background-color: var(--background);
            scroll-behavior: smooth;
            overflow-x: hidden;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header Styles */
        header {
            background-color: var(--light);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }
        
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
        }
        
        .logo {
            font-size: 24px;
            font-weight: 700;
            color: var(--primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .logo i {
            font-size: 28px;
        }
        
        .nav-desktop {
            display: flex;
            gap: 25px;
            align-items: center;
        }
        
        @media (max-width: 992px) {
            .nav-desktop {
                display: none;
            }
        }
        
        .nav-desktop a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            transition: color 0.3s;
            white-space: nowrap;
            font-size: 15px;
        }
        
        .nav-desktop a:hover {
            color: var(--primary);
        }
        
        .nav-desktop .list-business {
            background-color: var(--accent);
            color: white;
            padding: 8px 20px;
            border-radius: 5px;
            margin-left: 10px;
            font-weight: 600;
        }
        
        .nav-desktop .list-business:hover {
            background-color: #3d8b40;
            color: white;
        }
        
        .mobile-menu-btn {
            display: none;
            font-size: 24px;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--dark);
            padding: 5px;
        }
        
        @media (max-width: 992px) {
            .mobile-menu-btn {
                display: block;
            }
        }
        
        .mobile-menu {
            display: none;
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: var(--light);
            box-shadow: 0 5px 10px rgba(0,0,0,0.1);
            padding: 20px;
            z-index: 999;
            max-height: calc(100vh - 70px);
            overflow-y: auto;
        }
        
        .mobile-menu.active {
            display: block;
        }
        
        .mobile-menu a {
            display: block;
            padding: 15px 0;
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            border-bottom: 1px solid var(--light-gray);
            font-size: 16px;
        }
        
        .mobile-menu .list-business {
            background-color: var(--accent);
            color: white;
            padding: 12px 20px;
            border-radius: 5px;
            text-align: center;
            margin-top: 10px;
            border: none;
            font-weight: 600;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%);
            color: white;
            padding: 150px 0 80px;
            text-align: center;
            margin-top: 70px;
        }
        
        .hero h1 {
            font-size: 42px;
            margin-bottom: 20px;
            font-weight: 700;
            line-height: 1.2;
        }
        
        @media (max-width: 768px) {
            .hero {
                padding: 120px 0 50px;
            }
            
            .hero h1 {
                font-size: 32px;
            }
        }
        
        @media (max-width: 480px) {
            .hero h1 {
                font-size: 28px;
            }
        }
        
        .hero p {
            font-size: 18px;
            margin-bottom: 30px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
        }
        
        @media (max-width: 768px) {
            .hero p {
                font-size: 16px;
                padding: 0 10px;
            }
        }
        
        .search-container {
            max-width: 600px;
            margin: 0 auto 30px;
            position: relative;
            padding: 0 15px;
        }
        
        .search-box {
            width: 100%;
            padding: 16px 20px 16px 55px;
            border-radius: 50px;
            border: none;
            font-size: 16px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            font-family: 'Poppins', sans-serif;
        }
        
        @media (max-width: 480px) {
            .search-box {
                padding: 14px 20px 14px 50px;
                font-size: 15px;
            }
        }
        
        .search-icon {
            position: absolute;
            left: 35px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--gray);
            font-size: 18px;
        }
        
        @media (max-width: 480px) {
            .search-icon {
                left: 30px;
            }
        }
        
        .cta-button {
            background-color: var(--primary);
            color: white;
            padding: 14px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            transition: all 0.3s;
            font-size: 16px;
            border: 2px solid var(--primary);
        }
        
        .cta-button:hover {
            background-color: #e06b00;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        /* Categories Section */
        .categories {
            padding: 50px 0 30px;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 40px;
            font-size: 32px;
            color: var(--dark);
            position: relative;
            padding-bottom: 15px;
        }
        
        .section-title:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background-color: var(--primary);
            border-radius: 2px;
        }
        
        @media (max-width: 768px) {
            .section-title {
                font-size: 28px;
                margin-bottom: 30px;
            }
        }
        
        @media (max-width: 480px) {
            .section-title {
                font-size: 24px;
            }
        }
        
        .categories-container {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
            margin-bottom: 40px;
        }
        
        @media (max-width: 1200px) {
            .categories-container {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        
        @media (max-width: 992px) {
            .categories-container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            .categories-container {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
        }
        
        @media (max-width: 480px) {
            .categories-container {
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
            }
        }
        
        .category-card {
            background-color: var(--light);
            border-radius: 12px;
            padding: 25px 15px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            cursor: pointer;
            transition: all 0.3s;
            border: 2px solid transparent;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 180px;
        }
        
        .category-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
            border-color: var(--primary);
        }
        
        .category-card.active {
            background-color: var(--primary);
            color: white;
            border-color: var(--primary);
        }
        
        .category-card i {
            font-size: 38px;
            margin-bottom: 15px;
            color: var(--primary);
            transition: all 0.3s;
        }
        
        .category-card.active i {
            color: white;
        }
        
        .category-card h3 {
            font-size: 17px;
            margin-bottom: 10px;
            font-weight: 600;
        }
        
        @media (max-width: 480px) {
            .category-card h3 {
                font-size: 16px;
            }
            
            .category-card {
                padding: 20px 12px;
                min-height: 160px;
            }
            
            .category-card i {
                font-size: 32px;
                margin-bottom: 12px;
            }
        }
        
        .category-card p {
            font-size: 13px;
            color: var(--gray);
            line-height: 1.4;
        }
        
        .category-card.active p {
            color: rgba(255,255,255,0.9);
        }
        
        /* Guide Section */
        .guide-section {
            padding: 60px 0;
            background-color: white;
        }
        
        .guide-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        
        @media (max-width: 992px) {
            .guide-container {
                grid-template-columns: repeat(2, 1fr);
                gap: 25px;
            }
        }
        
        @media (max-width: 768px) {
            .guide-container {
                grid-template-columns: 1fr;
                gap: 20px;
            }
        }
        
        .guide-card {
            background-color: var(--background);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            transition: transform 0.3s;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .guide-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        
        .guide-image {
            height: 200px;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 60px;
        }
        
        .guide-content {
            padding: 25px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        
        .guide-content h3 {
            font-size: 20px;
            margin-bottom: 15px;
            color: var(--dark);
            line-height: 1.4;
        }
        
        .guide-content p {
            color: var(--gray);
            margin-bottom: 20px;
            line-height: 1.6;
            flex-grow: 1;
        }
        
        .guide-btn {
            background-color: var(--secondary);
            color: white;
            padding: 10px 22px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 500;
            display: inline-block;
            transition: all 0.3s;
            text-align: center;
            align-self: flex-start;
        }
        
        .guide-btn:hover {
            background-color: #155a8a;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        /* Job Listings Section */
        .job-listing-card {
            background-color: var(--light);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            transition: all 0.3s;
            border-left: 5px solid var(--primary);
            margin-bottom: 30px;
        }
        
        .job-listing-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        
        .job-header {
            padding: 25px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-bottom: 1px solid var(--light-gray);
        }
        
        .job-title-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .job-title {
            font-size: 22px;
            color: var(--dark);
            flex: 1;
            min-width: 250px;
        }
        
        @media (max-width: 768px) {
            .job-title {
                font-size: 20px;
                min-width: 100%;
            }
        }
        
        .job-type {
            background-color: var(--secondary);
            color: white;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
        }
        
        .job-company {
            font-size: 18px;
            color: var(--primary);
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .job-location {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--gray);
            font-size: 15px;
            flex-wrap: wrap;
        }
        
        .job-body {
            padding: 25px;
        }
        
        .job-details-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 25px;
        }
        
        @media (max-width: 992px) {
            .job-details-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 576px) {
            .job-details-grid {
                grid-template-columns: 1fr;
            }
        }
        
        .job-detail-item {
            background-color: var(--light-gray);
            padding: 18px;
            border-radius: 8px;
            transition: all 0.3s;
        }
        
        .job-detail-item:hover {
            background-color: #e0e0e0;
            transform: translateY(-3px);
        }
        
        .job-detail-label {
            font-size: 13px;
            color: var(--gray);
            margin-bottom: 8px;
            font-weight: 500;
        }
        
        .job-detail-value {
            font-size: 16px;
            font-weight: 600;
            color: var(--dark);
        }
        
        .job-description {
            color: var(--gray);
            margin-bottom: 25px;
            line-height: 1.7;
        }
        
        .job-requirements {
            margin-bottom: 25px;
        }
        
        .job-requirements h4 {
            margin-bottom: 15px;
            color: var(--dark);
            font-size: 18px;
        }
        
        .requirements-list {
            list-style-type: none;
        }
        
        .requirements-list li {
            margin-bottom: 10px;
            padding-left: 28px;
            position: relative;
            line-height: 1.5;
        }
        
        .requirements-list li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--accent);
            font-weight: bold;
            font-size: 18px;
        }
        
        .job-actions {
            display: flex;
            gap: 15px;
            margin-top: 25px;
            flex-wrap: wrap;
        }
        
        @media (max-width: 576px) {
            .job-actions {
                flex-direction: column;
            }
        }
        
        .job-apply-btn {
            flex: 1;
            background-color: var(--accent);
            color: white;
            padding: 14px 20px;
            border-radius: 8px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 16px;
            min-width: 150px;
        }
        
        .job-apply-btn:hover {
            background-color: #3d8b40;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .job-save-btn {
            background-color: var(--secondary);
            color: white;
            padding: 14px 20px;
            border-radius: 8px;
            border: none;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 16px;
            min-width: 150px;
        }
        
        .job-save-btn:hover {
            background-color: #155a8a;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        /* Listings Section */
        .listings {
            padding: 30px 0 60px;
        }
        
        .listings-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            margin-bottom: 40px;
        }
        
        @media (max-width: 1200px) {
            .listings-container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        @media (max-width: 992px) {
            .listings-container {
                grid-template-columns: repeat(2, 1fr);
                gap: 25px;
            }
        }
        
        @media (max-width: 768px) {
            .listings-container {
                gap: 20px;
            }
        }
        
        @media (max-width: 576px) {
            .listings-container {
                grid-template-columns: 1fr;
                gap: 20px;
            }
        }
        
        .listing-card {
            background-color: var(--light);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            transition: all 0.3s;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .listing-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        
        .listing-header {
            padding: 22px;
            border-bottom: 1px solid var(--light-gray);
            background-color: #fafafa;
        }
        
        .listing-title {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 12px;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .listing-title h3 {
            font-size: 20px;
            color: var(--dark);
            flex: 1;
            line-height: 1.3;
        }
        
        @media (max-width: 480px) {
            .listing-title h3 {
                font-size: 18px;
            }
        }
        
        .verified-badge {
            background-color: var(--accent);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
            margin-left: 10px;
        }
        
        .listing-rating {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #FF9529;
            font-weight: 500;
            font-size: 15px;
        }
        
        .listing-category {
            color: var(--gray);
            font-size: 14px;
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .listing-body {
            padding: 22px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        
        .listing-description {
            color: var(--gray);
            margin-bottom: 20px;
            line-height: 1.6;
            height: 120px;
            overflow: hidden;
            position: relative;
        }
        
        @media (max-width: 768px) {
            .listing-description {
                height: 100px;
            }
        }
        
        .listing-description:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30px;
            background: linear-gradient(to bottom, transparent, white);
        }
        
        .listing-services {
            margin-bottom: 20px;
        }
        
        .listing-services h4 {
            margin-bottom: 12px;
            color: var(--dark);
            font-size: 16px;
        }
        
        .services-list {
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .services-list li {
            background-color: var(--light-gray);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 13px;
            transition: all 0.3s;
        }
        
        .services-list li:hover {
            background-color: #e0e0e0;
            transform: translateY(-2px);
        }
        
        .listing-details {
            margin-bottom: 20px;
        }
        
        .detail-item {
            display: flex;
            margin-bottom: 10px;
            align-items: center;
        }
        
        .detail-item i {
            color: var(--primary);
            width: 22px;
            margin-right: 12px;
            font-size: 16px;
        }
        
        .map-container {
            height: 150px;
            margin-bottom: 20px;
            border-radius: 8px;
            overflow: hidden;
            flex-shrink: 0;
        }
        
        .map-container iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        
        .listing-actions {
            display: flex;
            gap: 12px;
            margin-top: auto;
        }
        
        @media (max-width: 480px) {
            .listing-actions {
                flex-direction: column;
            }
        }
        
        .action-btn {
            flex: 1;
            padding: 12px;
            border-radius: 8px;
            border: none;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.3s;
            font-size: 15px;
        }
        
        .action-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .call-btn {
            background-color: var(--primary);
            color: white;
        }
        
        .call-btn:hover {
            background-color: #e06b00;
        }
        
        .whatsapp-btn {
            background-color: #25D366;
            color: white;
        }
        
        .whatsapp-btn:hover {
            background-color: #1da851;
        }
        
        .directions-btn {
            background-color: var(--secondary);
            color: white;
        }
        
        .directions-btn:hover {
            background-color: #155a8a;
        }
        
        .no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            color: var(--gray);
            font-size: 18px;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        
        .no-results i {
            font-size: 60px;
            margin-bottom: 20px;
            color: #ddd;
            display: block;
        }
        
        .load-more-container {
            text-align: center;
            margin-top: 50px;
        }
        
        .load-more-btn {
            background-color: var(--accent);
            color: white;
            border: none;
            padding: 14px 40px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }
        
        .load-more-btn:hover {
            background-color: #3d8b40;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .load-more-btn.disabled {
            background-color: #cccccc;
            cursor: not-allowed;
            transform: none !important;
            box-shadow: none !important;
        }
        
        /* Contact Section with Google Map Embed */
        .contact {
            background-color: var(--light);
            padding: 60px 0;
        }
        
        .contact-container {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .contact-form {
            background-color: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }
        
        @media (max-width: 768px) {
            .contact-form {
                padding: 30px 25px;
            }
        }
        
        @media (max-width: 480px) {
            .contact-form {
                padding: 25px 20px;
            }
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }
        
        @media (max-width: 768px) {
            .form-row {
                grid-template-columns: 1fr;
                gap: 15px;
            }
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group.full-width {
            grid-column: 1 / -1;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: var(--dark);
            font-size: 15px;
        }
        
        .form-group label .required {
            color: #ff4444;
        }
        
        .form-control {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            transition: all 0.3s;
        }
        
        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(245, 124, 0, 0.2);
        }
        
        /* Google Map Embed Section - ADDED BACK */
        .map-preview-container {
            margin-bottom: 20px;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #ddd;
            height: 300px;
        }
        
        @media (max-width: 768px) {
            .map-preview-container {
                height: 250px;
            }
        }
        
        @media (max-width: 480px) {
            .map-preview-container {
                height: 200px;
            }
        }
        
        .map-preview {
            height: 100%;
            width: 100%;
        }
        
        .map-instructions {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 14px;
            color: var(--gray);
            line-height: 1.6;
        }
        
        .map-instructions h4 {
            color: var(--primary);
            margin-bottom: 12px;
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .map-instructions ol {
            padding-left: 20px;
            margin-bottom: 10px;
        }
        
        .map-instructions li {
            margin-bottom: 8px;
        }
        
        .map-actions {
            display: flex;
            gap: 12px;
            margin-top: 15px;
            flex-wrap: wrap;
        }
        
        @media (max-width: 480px) {
            .map-actions {
                flex-direction: column;
            }
        }
        
        .map-action-btn {
            padding: 12px 22px;
            background-color: var(--secondary);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 15px;
            flex: 1;
            min-width: 150px;
        }
        
        @media (max-width: 480px) {
            .map-action-btn {
                width: 100%;
            }
        }
        
        .map-action-btn:hover {
            background-color: #155a8a;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .map-action-btn.secondary {
            background-color: var(--light-gray);
            color: var(--dark);
        }
        
        .map-action-btn.secondary:hover {
            background-color: #ddd;
        }
        
        .coordinates-input {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 20px;
        }
        
        @media (max-width: 576px) {
            .coordinates-input {
                grid-template-columns: 1fr;
            }
        }
        
        .submit-btn {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 16px 40px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            width: 100%;
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        
        .submit-btn:hover {
            background-color: #e06b00;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        /* Footer */
        footer {
            background-color: var(--dark);
            color: white;
            padding: 60px 0 30px;
        }
        
        .footer-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
            margin-bottom: 40px;
        }
        
        @media (max-width: 992px) {
            .footer-container {
                grid-template-columns: repeat(2, 1fr);
                gap: 30px;
            }
        }
        
        @media (max-width: 576px) {
            .footer-container {
                grid-template-columns: 1fr;
                gap: 30px;
            }
        }
        
        .footer-section h3 {
            font-size: 20px;
            margin-bottom: 20px;
            color: white;
            position: relative;
            padding-bottom: 10px;
        }
        
        .footer-section h3:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 3px;
            background-color: var(--primary);
        }
        
        .footer-links {
            list-style-type: none;
        }
        
        .footer-links li {
            margin-bottom: 12px;
        }
        
        .footer-links a {
            color: #CCCCCC;
            text-decoration: none;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        
        .footer-links a:hover {
            color: white;
            transform: translateX(5px);
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid #444;
            color: #AAAAAA;
            font-size: 14px;
        }
        
        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            z-index: 1001;
            overflow-y: auto;
            padding: 20px;
        }
        
        .modal-content {
            background-color: white;
            margin: 50px auto;
            padding: 40px;
            border-radius: 12px;
            max-width: 800px;
            width: 100%;
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
            .modal-content {
                padding: 30px 25px;
                margin: 30px auto;
            }
        }
        
        @media (max-width: 480px) {
            .modal-content {
                padding: 25px 20px;
                margin: 20px auto;
            }
        }
        
        .modal-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            font-size: 28px;
            cursor: pointer;
            color: var(--gray);
            transition: all 0.3s;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }
        
        .modal-close:hover {
            background-color: #f0f0f0;
            color: var(--dark);
        }
        
        .modal h2 {
            margin-bottom: 20px;
            color: var(--primary);
            font-size: 28px;
        }
        
        @media (max-width: 480px) {
            .modal h2 {
                font-size: 24px;
            }
        }
        
        .modal p, .modal ul {
            margin-bottom: 15px;
            color: var(--gray);
            line-height: 1.6;
        }
        
        .modal ul {
            padding-left: 20px;
        }
        
        /* Ad Placeholders */
        .ad-placeholder {
            background-color: var(--light-gray);
            border-radius: 8px;
            padding: 25px;
            text-align: center;
            color: var(--gray);
            margin: 30px 0;
            border: 2px dashed #CCCCCC;
            font-size: 16px;
        }
        
        /* Success Message */
        .success-message {
            display: none;
            background-color: #4CAF50;
            color: white;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 30px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        /* Scroll to Top Button */
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: var(--primary);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            cursor: pointer;
            z-index: 999;
            transition: all 0.3s;
            border: none;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            opacity: 0;
            visibility: hidden;
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            background-color: #e06b00;
            transform: translateY(-5px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
            .scroll-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 20px;
            }
        }
        
        /* Loading Spinner */
        .loading-spinner {
            display: none;
            text-align: center;
            padding: 40px;
            grid-column: 1 / -1;
        }
        
        .spinner {
            border: 5px solid #f3f3f3;
            border-top: 5px solid var(--primary);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Toast Notification */
        .toast {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background-color: var(--accent);
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1002;
            transition: transform 0.3s ease-in-out;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            max-width: 90%;
        }
        
        .toast.show {
            transform: translateX(-50%) translateY(0);
        }
        
        /* Mobile App Banner */
        .app-banner {
            background: linear-gradient(135deg, var(--dark) 0%, #444 100%);
            color: white;
            padding: 20px;
            border-radius: 12px;
            margin: 40px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        @media (max-width: 768px) {
            .app-banner {
                flex-direction: column;
                text-align: center;
            }
        }
        
        .app-banner-content {
            flex: 1;
        }
        
        .app-banner h3 {
            font-size: 22px;
            margin-bottom: 10px;
        }
        
        .app-banner p {
            color: #ddd;
            margin-bottom: 15px;
        }
        
        .app-buttons {
            display: flex;
            gap: 15px;
        }
        
        @media (max-width: 480px) {
            .app-buttons {
                flex-direction: column;
                width: 100%;
            }
        }
        
        .app-btn {
            background-color: white;
            color: var(--dark);
            padding: 12px 25px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s;
        }
        
        .app-btn:hover {
            background-color: var(--primary);
            color: white;
            transform: translateY(-3px);
        }
    </style>
</head>
<body>
    <!-- Scroll to Top Button -->
    <button class="scroll-to-top" id="scrollToTop">
        <i class="fas fa-arrow-up"></i>
    </button>
    
    <!-- Toast Notification -->
    <div class="toast" id="toast">
        <i class="fas fa-check-circle"></i>
        <span id="toastMessage">Action completed successfully!</span>
    </div>
    
    <!-- Header -->
    <header>
        <div class="container header-container">
            <a href="#" class="logo">
                <i class="fas fa-store"></i>
                Bhopal Bazaar
            </a>
            
            <nav class="nav-desktop">
                <a href="#home">Home</a>
                <a href="#categories">Categories</a>
                <a href="#listings">Businesses</a>
                <a href="#listings" id="jobsLink">Jobs</a>
                <a href="#guide" id="guideLink">Guide</a>
                <a href="#contact" class="list-business">List Business</a>
            </nav>
            
            <button class="mobile-menu-btn" id="mobileMenuBtn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        
        <div class="mobile-menu" id="mobileMenu">
            <a href="#home">
                <i class="fas fa-home"></i> Home
            </a>
            <a href="#categories">
                <i class="fas fa-list"></i> Categories
            </a>
            <a href="#listings">
                <i class="fas fa-building"></i> Businesses
            </a>
            <a href="#listings" id="mobileJobsLink">
                <i class="fas fa-briefcase"></i> Jobs
            </a>
            <a href="#guide" id="mobileGuideLink">
                <i class="fas fa-book"></i> Guide
            </a>
            <a href="#contact" class="list-business">
                <i class="fas fa-plus-circle"></i> List Business
            </a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <h1>Find Trusted Businesses in Bhopal</h1>
            <p>Discover the best shops, services, and local businesses in Bhopal. From New Market to MP Nagar, we've got you covered.</p>
            
            <div class="search-container">
                <input type="text" class="search-box" id="searchBox" placeholder="Search for businesses, shops, or services...">
                <i class="fas fa-search search-icon"></i>
            </div>
            
            <a href="#contact" class="cta-button" id="heroListBusinessBtn">
                <i class="fas fa-plus-circle"></i> List Your Business FREE
            </a>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories" id="categories">
        <div class="container">
            <h2 class="section-title">Browse by Category</h2>
            
            <div class="categories-container">
                <div class="category-card active" data-category="all">
                    <i class="fas fa-store"></i>
                    <h3>All Businesses</h3>
                    <p>View all listings</p>
                </div>
                
                <div class="category-card" data-category="food">
                    <i class="fas fa-utensils"></i>
                    <h3>Food & Dining</h3>
                    <p>Restaurants, cafes, food delivery</p>
                </div>
                
                <div class="category-card" data-category="services">
                    <i class="fas fa-concierge-bell"></i>
                    <h3>Services</h3>
                    <p>Home services, repairs, maintenance</p>
                </div>
                
                <div class="category-card" data-category="shops">
                    <i class="fas fa-shopping-bag"></i>
                    <h3>Shops & Markets</h3>
                    <p>Retail stores, shopping markets</p>
                </div>
                
                <div class="category-card" data-category="jobs">
                    <i class="fas fa-briefcase"></i>
                    <h3>Jobs & Careers</h3>
                    <p>Job opportunities, recruitment</p>
                </div>
                
                <!-- NEW CATEGORIES START -->
                <div class="category-card" data-category="health">
                    <i class="fas fa-heartbeat"></i>
                    <h3>Health & Medical</h3>
                    <p>Hospitals, clinics, pharmacies</p>
                </div>
                
                <div class="category-card" data-category="education">
                    <i class="fas fa-graduation-cap"></i>
                    <h3>Education</h3>
                    <p>Schools, coaching, training</p>
                </div>
                
                <div class="category-card" data-category="automobile">
                    <i class="fas fa-car"></i>
                    <h3>Automobile</h3>
                    <p>Cars, bikes, repairs, sales</p>
                </div>
                
                <div class="category-card" data-category="realestate">
                    <i class="fas fa-home"></i>
                    <h3>Real Estate</h3>
                    <p>Property, rentals, builders</p>
                </div>
                
                <div class="category-card" data-category="electronics">
                    <i class="fas fa-laptop"></i>
                    <h3>Electronics</h3>
                    <p>Mobile, laptop, appliances</p>
                </div>
                
                <div class="category-card" data-category="travel">
                    <i class="fas fa-plane"></i>
                    <h3>Travel & Tourism</h3>
                    <p>Travel agents, hotels, tours</p>
                </div>
                
                <div class="category-card" data-category="beauty">
                    <i class="fas fa-spa"></i>
                    <h3>Beauty & Spa</h3>
                    <p>Salons, spas, beauty care</p>
                </div>
                
                <div class="category-card" data-category="events">
                    <i class="fas fa-glass-cheers"></i>
                    <h3>Events & Wedding</h3>
                    <p>Event planners, wedding services</p>
                </div>
                
                <div class="category-card" data-category="legal">
                    <i class="fas fa-gavel"></i>
                    <h3>Legal Services</h3>
                    <p>Lawyers, legal advice</p>
                </div>
                
                <div class="category-card" data-category="homeappliances">
                    <i class="fas fa-blender"></i>
                    <h3>Home Appliances</h3>
                    <p>Appliances, repair, sales</p>
                </div>
                <!-- NEW CATEGORIES END -->
            </div>
            
            <!-- Ad Placeholder -->
            <div class="ad-placeholder">
                <i class="fas fa-ad"></i> Advertisement - 728x90
            </div>
            
            <!-- Mobile App Banner -->
            <div class="app-banner">
                <div class="app-banner-content">
                    <h3>Get the BhopalBazaar App</h3>
                    <p>Find businesses on the go. Download our mobile app for Android and iOS.</p>
                </div>
                <div class="app-buttons">
                    <a href="#" class="app-btn">
                        <i class="fab fa-google-play"></i> Google Play
                    </a>
                    <a href="#" class="app-btn">
                        <i class="fab fa-app-store"></i> App Store
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Guide Section -->
    <section class="guide-section" id="guide">
        <div class="container">
            <h2 class="section-title">Bhopal Local Guide</h2>
            <p style="text-align: center; margin-bottom: 40px; color: var(--gray); max-width: 800px; margin-left: auto; margin-right: auto;">
                Explore Bhopal with our comprehensive local guides. Find the best places to visit, eat, shop and explore in the City of Lakes.
            </p>
            
            <div class="guide-container">
                <div class="guide-card">
                    <div class="guide-image" style="background-color: #4CAF50; display: flex; align-items: center; justify-content: center; color: white; font-size: 60px;">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="guide-content">
                        <h3>Top UPSC Coaching in MP Nagar</h3>
                        <p>Complete guide to the best UPSC coaching institutes in Bhopal's education hub. Compare faculty, results, fees and infrastructure.</p>
                        <a href="#!" class="guide-btn">Read Guide</a>
                    </div>
                </div>
                
                <div class="guide-card">
                    <div class="guide-image" style="background-color: #1E6FA5; display: flex; align-items: center; justify-content: center; color: white; font-size: 60px;">
                        <i class="fas fa-umbrella-beach"></i>
                    </div>
                    <div class="guide-content">
                        <h3>Weekend Getaways Near Bhopal</h3>
                        <p>Discover 15 amazing weekend destinations within 300km of Bhopal. Perfect for family trips, couples, and adventure seekers.</p>
                        <a href="#!" class="guide-btn">Read Guide</a>
                    </div>
                </div>
                
                <div class="guide-card">
                    <div class="guide-image" style="background-color: #F57C00; display: flex; align-items: center; justify-content: center; color: white; font-size: 60px;">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <div class="guide-content">
                        <h3>Tourist Places in Bhopal</h3>
                        <p>Complete travel guide to Bhopal's famous attractions including historical sites, lakes, museums and hidden gems.</p>
                        <a href="#!" class="guide-btn">Read Guide</a>
                    </div>
                </div>
            </div>
            
            <!-- Ad Placeholder -->
            <div class="ad-placeholder" style="margin-top: 50px;">
                <i class="fas fa-ad"></i> Advertisement - 728x90
            </div>
        </div>
    </section>

    <!-- Listings Section -->
    <section class="listings" id="listings">
        <div class="container">
            <h2 class="section-title">Featured Businesses in Bhopal</h2>
            
            <!-- Loading Spinner -->
            <div class="loading-spinner" id="loadingSpinner">
                <div class="spinner"></div>
                <p>Loading businesses...</p>
            </div>
            
            <div class="listings-container" id="listingsContainer">
                <!-- Listings will be dynamically loaded here -->
            </div>
            
            <div class="load-more-container">
                <button class="load-more-btn" id="loadMoreBtn">
                    <i class="fas fa-sync-alt"></i> Load More Businesses
                </button>
            </div>
        </div>
    </section>

    <!-- ✅ Contact Section with EmailJS Integration -->
    <section class="contact" id="contact">
        <div class="container">
            <h2 class="section-title">List Your Business</h2>
            
            <div class="contact-container">
                <div class="success-message" id="successMessage">
                    <i class="fas fa-check-circle" style="font-size: 48px; margin-bottom: 15px;"></i>
                    <h3>Thank You!</h3>
                    <p>Your business listing has been submitted successfully. We will verify and publish it within 24 hours. <strong>A confirmation email has been sent to /strong>.</p>
                </div>
                
                <form class="contact-form" id="businessForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="businessName">Business Name <span class="required">*</span></label>
                            <input type="text" id="businessName" class="form-control" required placeholder="e.g., Manohar Dairy">
                        </div>
                        
                        <div class="form-group">
                            <label for="category">Category <span class="required">*</span></label>
                            <select id="category" class="form-control" required>
                                <option value="">Select a category</option>
                                <option value="food">Food & Dining</option>
                                <option value="services">Services</option>
                                <option value="shops">Shops & Retail</option>
                                <option value="jobs">Jobs & Careers</option>
                                <!-- New Categories -->
                                <option value="health">Health & Medical</option>
                                <option value="education">Education</option>
                                <option value="automobile">Automobile</option>
                                <option value="realestate">Real Estate</option>
                                <option value="electronics">Electronics</option>
                                <option value="travel">Travel & Tourism</option>
                                <option value="beauty">Beauty & Spa</option>
                                <option value="events">Events & Wedding</option>
                                <option value="legal">Legal Services</option>
                                <option value="homeappliances">Home Appliances</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="address">Business Address <span class="required">*</span></label>
                            <input type="text" id="address" class="form-control" required placeholder="e.g., Plot 45, Zone II, MP Nagar, Bhopal">
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone Number <span class="required">*</span></label>
                            <input type="tel" id="phone" class="form-control" required placeholder="e.g., +91 755 1234567">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" class="form-control" placeholder="e.g., info@yourbusiness.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="website">Website (Optional)</label>
                            <input type="url" id="website" class="form-control" placeholder="e.g., https://yourbusiness.com">
                        </div>
                    </div>
                    
                    <div class="form-group full-width">
                        <label for="description">Business Description <span class="required">*</span></label>
                        <textarea id="description" class="form-control" rows="4" required placeholder="Describe your business, services, history, etc."></textarea>
                    </div>
                    
                    <!-- Google Map Embed Section -->
                    <div class="form-group full-width">
                        <label>Business Location on Map <span class="required">*</span></label>
                        
                        <div class="map-instructions">
                            <h4><i class="fas fa-info-circle"></i> How to add your location:</h4>
                            <ol>
                                <li>Enter your business address above</li>
                                <li>Click "Find on Map" to locate your business</li>
                                <li>Drag the red marker to exact location if needed</li>
                                <li>Copy coordinates from the map (or enter manually below)</li>
                            </ol>
                        </div>
                        
                        <div class="map-preview-container">
                            <div id="mapPreview" class="map-preview">
                                <!-- Google Map will be loaded here -->
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.85820778933!2d77.23682942473105!3d23.199347693033407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1647421231234!5m2!1sen!2sin" 
                                    style="border:0; width:100%; height:100%;" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                        
                        <div class="map-actions">
                            <button type="button" class="map-action-btn" id="findOnMapBtn">
                                <i class="fas fa-map-marker-alt"></i> Find on Map
                            </button>
                            <button type="button" class="map-action-btn secondary" id="resetMapBtn">
                                <i class="fas fa-redo"></i> Reset Map
                            </button>
                            <button type="button" class="map-action-btn secondary" id="useCurrentLocationBtn">
                                <i class="fas fa-location-arrow"></i> Use My Location
                            </button>
                        </div>
                        
                        <div class="coordinates-input">
                            <div class="form-group">
                                <label for="latitude">Latitude <span class="required">*</span></label>
                                <input type="text" id="latitude" class="form-control" required placeholder="e.g., 23.2547" value="23.2547">
                            </div>
                            
                            <div class="form-group">
                                <label for="longitude">Longitude <span class="required">*</span></label>
                                <input type="text" id="longitude" class="form-control" required placeholder="e.g., 77.4030" value="77.4030">
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group full-width">
                        <label for="services">Services (Comma separated)</label>
                        <input type="text" id="services" class="form-control" placeholder="e.g., Milk Delivery, Dairy Products, Home Delivery">
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="openingTime">Opening Time</label>
                            <input type="time" id="openingTime" class="form-control" value="09:00">
                        </div>
                        
                        <div class="form-group">
                            <label for="closingTime">Closing Time</label>
                            <input type="time" id="closingTime" class="form-control" value="21:00">
                        </div>
                    </div>
                    
                    <button type="submit" class="submit-btn">
                        <i class="fas fa-paper-plane"></i> Submit Business Listing
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="footer">
        <div class="container">
            <div class="footer-container">
                <div class="footer-section">
                    <h3>Bhopal Bazaar</h3>
                    <p>Your trusted local business directory for everything in Bhopal. Find shops, services, and essential guides.</p>
                    <div style="margin-top: 20px; display: flex; gap: 15px;">
                        <a href="#" style="color: #CCCCCC; font-size: 20px;"><i class="fab fa-facebook"></i></a>
                        <a href="#" style="color: #CCCCCC; font-size: 20px;"><i class="fab fa-twitter"></i></a>
                        <a href="#" style="color: #CCCCCC; font-size: 20px;"><i class="fab fa-instagram"></i></a>
                        <a href="#" style="color: #CCCCCC; font-size: 20px;"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#!" id="aboutLink"><i class="fas fa-info-circle"></i> About Us</a></li>
                        <li><a href="#contact"><i class="fas fa-phone"></i> Contact</a></li>
                        <li><a href="#guide" id="footerGuideLink"><i class="fas fa-book"></i> Guide</a></li>
                        <li><a href="#!" id="privacyLink"><i class="fas fa-shield-alt"></i> Privacy Policy</a></li>
                        <li><a href="#!" id="termsLink"><i class="fas fa-file-contract"></i> Terms & Conditions</a></li>
                        <li><a href="#!" id="disclaimerLink"><i class="fas fa-exclamation-triangle"></i> Disclaimer</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Categories</h3>
                    <ul class="footer-links">
                        <li><a href="#!" class="footer-category" data-category="all"><i class="fas fa-store"></i> All Businesses</a></li>
                        <li><a href="#!" class="footer-category" data-category="food"><i class="fas fa-utensils"></i> Food & Dining</a></li>
                        <li><a href="#!" class="footer-category" data-category="services"><i class="fas fa-concierge-bell"></i> Services</a></li>
                        <li><a href="#!" class="footer-category" data-category="shops"><i class="fas fa-shopping-bag"></i> Shops & Markets</a></li>
                        <li><a href="#!" class="footer-category" data-category="jobs"><i class="fas fa-briefcase"></i> Jobs & Careers</a></li>
                        <li><a href="#!" class="footer-category" data-category="health"><i class="fas fa-heartbeat"></i> Health & Medical</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <ul class="footer-links">
                        <li><i class="fas fa-map-marker-alt"></i> Bhopal, Madhya Pradesh</li>
                        <li><i class="fas fa-phone"></i> +91 98765 43210</li>
                        <li><i class="fas fa-envelope"></i> info@bhopalbazaar.in</li>
                        <li><i class="fas fa-clock"></i> Mon-Sun: 9:00 AM - 8:00 PM</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 BhopalBazaar.in. All rights reserved. | Designed with ❤️ for Bhopal</p>
            </div>
        </div>
    </footer>

    <!-- Modals -->
    <!-- About Us Modal -->
    <div class="modal" id="aboutModal">
        <div class="modal-content">
            <button class="modal-close" id="closeAbout">&times;</button>
            <h2>About BhopalBazaar.in</h2>
            <p>Welcome to Bhopal Bazaar, your comprehensive local business directory dedicated to serving the vibrant city of Bhopal. Founded in 2024, our mission is to connect residents and visitors with trusted local businesses, services, and essential information.</p>
            <p>We understand the importance of supporting local economies and helping businesses thrive. Our platform showcases the rich diversity of Bhopal's commercial landscape, from historic markets like New Market and Chowk Bazaar to modern establishments in MP Nagar and Arera Colony.</p>
            <h3>Our Vision</h3>
            <p>To become the most trusted and comprehensive local business directory for Bhopal, making it easier for people to find what they need and for businesses to reach their customers.</p>
            <h3>Our Mission</h3>
            <ul>
                <li>Verify and list genuine local businesses</li>
                <li>Provide accurate and up-to-date information</li>
                <li>Support local entrepreneurship and economic growth</li>
                <li>Create a reliable resource for residents and visitors</li>
            </ul>
        </div>
    </div>

    <!-- Privacy Policy Modal -->
    <div class="modal" id="privacyModal">
        <div class="modal-content">
            <button class="modal-close" id="closePrivacy">&times;</button>
            <h2>Privacy Policy</h2>
            <p><strong>Last Updated:</strong> January 2024</p>
            
            <h3>1. Information We Collect</h3>
            <p>We collect information that you provide directly to us, including when you list your business, contact us, or use our services. This may include:</p>
            <ul>
                <li>Business information (name, address, contact details)</li>
                <li>Contact information (name, email, phone number)</li>
                <li>Business description and services offered</li>
                <li>Any other information you choose to provide</li>
            </ul>
            
            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
                <li>Display your business listing on our directory</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve and optimize our website and services</li>
                <li>Send you updates about your listing (if requested)</li>
            </ul>
            
            <h3>3. Cookies and Tracking Technologies</h3>
            <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier.</p>
        </div>
    </div>

    <!-- Terms Modal -->
    <div class="modal" id="termsModal">
        <div class="modal-content">
            <button class="modal-close" id="closeTerms">&times;</button>
            <h2>Terms and Conditions</h2>
            <p>By using BhopalBazaar.in, you agree to these terms and conditions. Please read them carefully.</p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.</p>
            
            <h3>2. Business Listings</h3>
            <p>Business owners are responsible for the accuracy of their listings. We reserve the right to verify, edit, or remove any listing that violates our policies or contains false information.</p>
        </div>
    </div>

    <!-- Disclaimer Modal -->
    <div class="modal" id="disclaimerModal">
        <div class="modal-content">
            <button class="modal-close" id="closeDisclaimer">&times;</button>
            <h2>Disclaimer</h2>
            
            <h3>1. General Information</h3>
            <p>The information contained on BhopalBazaar.in is for general information purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.</p>
            
            <h3>2. Business Listings</h3>
            <p>Business listings on our website are provided by the business owners or from publicly available sources. While we strive to ensure accuracy, we cannot guarantee that all information is current, complete, or accurate. Users should verify any important information directly with the business.</p>
        </div>
    </div>

    <!-- ✅ JavaScript with EmailJS Integration -->
    <script>
        // Business Data with ALL 15 CATEGORIES
        const businesses = [
            // Existing businesses
            {
                id: 1,
                name: "Manohar Dairy",
                category: "services",
                description: "Established in 1984, Manohar Dairy has been serving fresh, pure milk and dairy products to Bhopal residents for over 40 years. What began as a small family-run dairy in MP Nagar has grown into one of Bhopal's most trusted dairy brands, known for its uncompromising quality and timely home delivery service.",
                address: "Plot 45, Zone II, MP Nagar, Bhopal",
                map: "23.2547,77.4030",
                phone: "+91 755 1234567",
                whatsapp: "+9177551234567",
                services: ["Milk Delivery", "Dairy Products", "Sweets", "Home Delivery", "Subscription Plans"],
                hours: "5:00 AM - 11:00 PM",
                rating: 4.5,
                reviews: 120,
                verified: true
            },
            {
                id: 2,
                name: "Sagar Gaire",
                category: "food",
                description: "Sagar Gaire is more than just a restaurant; it's a Bhopal institution that has been delighting food lovers since 1978. Located in the bustling New Market area, this family-run establishment is famous for its mouthwatering snacks, especially its signature samosas and jalebis.",
                address: "Shop 12, New Market, Bhopal",
                map: "23.2590,77.4126",
                phone: "+91 755 2345678",
                whatsapp: "+9177552345678",
                services: ["Restaurant", "Fast Food", "Catering", "Home Delivery", "Sweets"],
                hours: "8:00 AM - 11:00 PM",
                rating: 4.3,
                reviews: 95,
                verified: true
            },
            {
                id: 3,
                name: "Rajat Textiles",
                category: "shops",
                description: "For over 30 years, Rajat Textiles has been Bhopal's premier destination for exquisite fabrics and tailoring services. Founded in 1992 by Mr. Rajat Gupta, this family-owned business in 10 Number Market has built a reputation for quality, variety, and exceptional customer service.",
                address: "Shop 45, 10 Number Market, Bhopal",
                map: "23.2481,77.4319",
                phone: "+91 755 3456789",
                whatsapp: "+9177553456789",
                services: ["Fabrics", "Tailoring", "Wedding Collections", "Alterations", "Design Consultation"],
                hours: "10:00 AM - 8:00 PM",
                rating: 4.7,
                reviews: 210,
                verified: true
            },
            // JOBS
            {
                id: 4,
                name: "Sales Executive - DB City Mall",
                category: "jobs",
                type: "job",
                jobDetails: {
                    company: "DB City Mall Showrooms",
                    location: "DB City Mall, Arera Colony, Bhopal",
                    salary: "₹2.4 - ₹3.0 LPA",
                    experience: "1-3 years",
                    jobType: "Full-time",
                    postedDate: "2 days ago",
                    vacancies: "5",
                    description: "We are hiring Sales Executives for premium showrooms in DB City Mall. The ideal candidate should have excellent communication skills, customer service orientation, and ability to meet sales targets.",
                    requirements: [
                        "Graduate in any discipline",
                        "Excellent communication skills in Hindi and English",
                        "Prior sales experience preferred but not mandatory",
                        "Basic computer knowledge",
                        "Presentable personality"
                    ],
                    benefits: [
                        "Attractive incentives on sales",
                        "Health insurance",
                        "Paid leaves",
                        "Employee discounts",
                        "Career growth opportunities"
                    ]
                }
            },
            // NEW CATEGORY BUSINESSES
            {
                id: 5,
                name: "City Hospital & Research Center",
                category: "health",
                description: "A multi-specialty hospital providing comprehensive healthcare services with state-of-the-art facilities. 24/7 emergency services, ICU, and specialist doctors available.",
                address: "Hoshangabad Road, Bhopal",
                map: "23.2400,77.4100",
                phone: "+91 755 9876543",
                whatsapp: "+9177559876543",
                services: ["Emergency", "OPD", "ICU", "Surgery", "Diagnostics"],
                hours: "24 Hours",
                rating: 4.8,
                reviews: 340,
                verified: true
            },
            {
                id: 6,
                name: "Bhopal Public School",
                category: "education",
                description: "CBSE affiliated school with modern infrastructure and experienced faculty. Focus on holistic development with academics, sports, and extracurricular activities.",
                address: "Arera Colony, Bhopal",
                map: "23.2515,77.4075",
                phone: "+91 755 8765432",
                whatsapp: "+9177558765432",
                services: ["Primary Education", "Secondary Education", "Sports", "Computer Lab", "Transport"],
                hours: "8:00 AM - 3:00 PM",
                rating: 4.6,
                reviews: 180,
                verified: true
            },
            {
                id: 7,
                name: "Premium Car Showroom",
                category: "automobile",
                description: "Authorized dealer for multiple premium car brands. New car sales, certified pre-owned cars, financing, and after-sales service.",
                address: "Hoshangabad Road, Bhopal",
                map: "23.2420,77.4150",
                phone: "+91 755 7654321",
                whatsapp: "+9177557654321",
                services: ["Car Sales", "Car Service", "Spare Parts", "Insurance", "Financing"],
                hours: "10:00 AM - 7:00 PM",
                rating: 4.4,
                reviews: 95,
                verified: true
            },
            {
                id: 8,
                name: "Dream Homes Realty",
                category: "realestate",
                description: "Trusted real estate consultants for residential and commercial properties in Bhopal. Property buying, selling, renting, and legal assistance.",
                address: "MP Nagar Zone I, Bhopal",
                map: "23.2550,77.4050",
                phone: "+91 755 6543210",
                whatsapp: "+9177556543210",
                services: ["Property Sales", "Property Rentals", "Legal Services", "Home Loans", "Property Management"],
                hours: "10:00 AM - 8:00 PM",
                rating: 4.7,
                reviews: 210,
                verified: true
            },
            {
                id: 9,
                name: "ElectroWorld",
                category: "electronics",
                description: "Latest electronics and appliances from top brands. Mobile phones, laptops, TVs, home appliances with warranty and installation services.",
                address: "DB City Mall, Bhopal",
                map: "23.2520,77.4080",
                phone: "+91 755 5432109",
                whatsapp: "+9177555432109",
                services: ["Electronics Sales", "Repair Services", "Installation", "Warranty", "Home Delivery"],
                hours: "10:00 AM - 9:00 PM",
                rating: 4.5,
                reviews: 160,
                verified: true
            },
            {
                id: 10,
                name: "Travel Bhopal Tours",
                category: "travel",
                description: "Complete travel solutions including flight tickets, hotel bookings, tour packages, and visa assistance. Customized travel itineraries.",
                address: "10 Number Market, Bhopal",
                map: "23.2485,77.4320",
                phone: "+91 755 4321098",
                whatsapp: "+9177554321098",
                services: ["Flight Booking", "Hotel Booking", "Tour Packages", "Visa Assistance", "Car Rental"],
                hours: "9:30 AM - 7:30 PM",
                rating: 4.3,
                reviews: 120,
                verified: true
            }
        ];

        // Additional businesses for "Load More"
        const additionalBusinesses = [
            {
                id: 11,
                name: "Glamour Salon & Spa",
                category: "beauty",
                description: "Premium salon and spa offering hair care, skincare, beauty treatments, and wellness therapies. Professional staff with international training.",
                address: "MP Nagar Zone II, Bhopal",
                map: "23.2560,77.4040",
                phone: "+91 755 3210987",
                whatsapp: "+9177553210987",
                services: ["Hair Styling", "Facials", "Massage", "Bridal Makeup", "Waxing"],
                hours: "9:00 AM - 9:00 PM",
                rating: 4.6,
                reviews: 140,
                verified: true
            },
            {
                id: 12,
                name: "Wedding Planners Bhopal",
                category: "events",
                description: "Complete wedding planning and event management services. Venue selection, decor, catering, photography, and entertainment arrangements.",
                address: "Arera Colony, Bhopal",
                map: "23.2505,77.4065",
                phone: "+91 755 2109876",
                whatsapp: "+9177552109876",
                services: ["Wedding Planning", "Event Management", "Catering", "Photography", "Decor"],
                hours: "10:00 AM - 7:00 PM",
                rating: 4.8,
                reviews: 95,
                verified: true
            },
            {
                id: 13,
                name: "Legal Solutions Firm",
                category: "legal",
                description: "Experienced legal professionals offering consultation and representation for civil, criminal, corporate, and family law matters.",
                address: "New Market, Bhopal",
                map: "23.2600,77.4130",
                phone: "+91 755 1098765",
                whatsapp: "+9177551098765",
                services: ["Legal Consultation", "Court Representation", "Documentation", "Property Law", "Family Law"],
                hours: "10:00 AM - 6:00 PM",
                rating: 4.7,
                reviews: 85,
                verified: true
            },
            {
                id: 14,
                name: "Home Appliances Center",
                category: "homeappliances",
                description: "One-stop shop for all home appliances - refrigerators, washing machines, ACs, microwaves, and kitchen appliances with installation and service.",
                address: "Habibganj, Bhopal",
                map: "23.2490,77.4040",
                phone: "+91 755 0987654",
                whatsapp: "+9177550987654",
                services: ["Appliance Sales", "Installation", "Repair", "Maintenance", "Spare Parts"],
                hours: "10:00 AM - 8:00 PM",
                rating: 4.4,
                reviews: 110,
                verified: true
            },
            {
                id: 15,
                name: "Software Developer - IT Company",
                category: "jobs",
                type: "job",
                jobDetails: {
                    company: "Tech Solutions Bhopal",
                    location: "MP Nagar, Bhopal",
                    salary: "₹3.5 - ₹5.0 LPA",
                    experience: "0-2 years",
                    jobType: "Full-time",
                    postedDate: "3 days ago",
                    vacancies: "8",
                    description: "Looking for freshers and experienced Software Developers to join our growing IT company. Work on exciting projects using modern technologies like React, Node.js, and Python.",
                    requirements: [
                        "B.Tech/B.E in Computer Science or related field",
                        "Knowledge of JavaScript, HTML, CSS",
                        "Understanding of databases (MySQL/MongoDB)",
                        "Problem-solving skills",
                        "Willingness to learn new technologies"
                    ],
                    benefits: [
                        "Flexible working hours",
                        "Work from home options",
                        "Health insurance",
                        "Performance bonuses",
                        "5-day work week"
                    ]
                }
            }
        ];

        // DOM Elements
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const searchBox = document.getElementById('searchBox');
        const listingsContainer = document.getElementById('listingsContainer');
        const categoryCards = document.querySelectorAll('.category-card');
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        const businessForm = document.getElementById('businessForm');
        const successMessage = document.getElementById('successMessage');
        const scrollToTop = document.getElementById('scrollToTop');
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        const loadingSpinner = document.getElementById('loadingSpinner');
        
        // Map elements
        const findOnMapBtn = document.getElementById('findOnMapBtn');
        const resetMapBtn = document.getElementById('resetMapBtn');
        const useCurrentLocationBtn = document.getElementById('useCurrentLocationBtn');
        const latitudeInput = document.getElementById('latitude');
        const longitudeInput = document.getElementById('longitude');
        const addressInput = document.getElementById('address');
        const mapPreview = document.getElementById('mapPreview');
        
        // Guide links
        const guideLink = document.getElementById('guideLink');
        const mobileGuideLink = document.getElementById('mobileGuideLink');
        const footerGuideLink = document.getElementById('footerGuideLink');
        
        // Jobs links
        const jobsLink = document.getElementById('jobsLink');
        const mobileJobsLink = document.getElementById('mobileJobsLink');
        
        // List business button
        const heroListBusinessBtn = document.getElementById('heroListBusinessBtn');
        
        // Modal elements
        const aboutLink = document.getElementById('aboutLink');
        const privacyLink = document.getElementById('privacyLink');
        const termsLink = document.getElementById('termsLink');
        const disclaimerLink = document.getElementById('disclaimerLink');
        
        const aboutModal = document.getElementById('aboutModal');
        const privacyModal = document.getElementById('privacyModal');
        const termsModal = document.getElementById('termsModal');
        const disclaimerModal = document.getElementById('disclaimerModal');
        
        const closeAbout = document.getElementById('closeAbout');
        const closePrivacy = document.getElementById('closePrivacy');
        const closeTerms = document.getElementById('closeTerms');
        const closeDisclaimer = document.getElementById('closeDisclaimer');
        
        // State
        let currentCategory = 'all';
        let currentSearch = '';
        let loadedBusinesses = [...businesses];
        let showingAdditional = false;
        let isLoading = false;
        let currentMapCenter = { lat: 23.2547, lng: 77.4030 };

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Show loading spinner
            loadingSpinner.style.display = 'block';
            
            // Simulate loading delay for better UX
            setTimeout(() => {
                renderListings(loadedBusinesses);
                loadingSpinner.style.display = 'none';
                setupEventListeners();
                updateMapPreview();
                showToast('Welcome to Bhopal Bazaar!');
            }, 800);
        });

        // Show toast notification
        function showToast(message) {
            toastMessage.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Setup all event listeners
        function setupEventListeners() {
            // Mobile menu toggle
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    mobileMenu.classList.toggle('active');
                    this.innerHTML = mobileMenu.classList.contains('active') ? 
                        '<i class="fas fa-times"></i>' : 
                        '<i class="fas fa-bars"></i>';
                });
            }

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                if (mobileMenu.classList.contains('active') && 
                    !mobileMenu.contains(event.target) && 
                    !mobileMenuBtn.contains(event.target)) {
                    mobileMenu.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });

            // Close mobile menu when clicking a link inside it
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });

            // Category filtering
            categoryCards.forEach(card => {
                card.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    
                    // Update active state
                    categoryCards.forEach(c => c.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show loading
                    listingsContainer.innerHTML = '';
                    loadingSpinner.style.display = 'block';
                    
                    // Filter listings with delay for UX
                    setTimeout(() => {
                        currentCategory = category;
                        filterListings();
                        loadingSpinner.style.display = 'none';
                        
                        // Show toast for category change
                        if (category === 'all') {
                            showToast('Showing all businesses');
                        } else {
                            showToast(`Showing ${getCategoryName(category)} category`);
                        }
                    }, 300);
                });
            });

            // Guide links - scroll to guide section
            [guideLink, mobileGuideLink, footerGuideLink].forEach(link => {
                if (link) {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        document.getElementById('guide').scrollIntoView({ 
                            behavior: 'smooth' 
                        });
                    });
                }
            });

            // Jobs links
            [jobsLink, mobileJobsLink].forEach(link => {
                if (link) {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        // Activate jobs category
                        categoryCards.forEach(c => {
                            c.classList.remove('active');
                            if (c.getAttribute('data-category') === 'jobs') {
                                c.classList.add('active');
                            }
                        });
                        
                        // Show loading
                        listingsContainer.innerHTML = '';
                        loadingSpinner.style.display = 'block';
                        
                        setTimeout(() => {
                            currentCategory = 'jobs';
                            filterListings();
                            loadingSpinner.style.display = 'none';
                            showToast('Showing job listings');
                            
                            // Scroll to listings
                            document.getElementById('listings').scrollIntoView({ 
                                behavior: 'smooth' 
                            });
                        }, 300);
                    });
                }
            });

            // Map functions
            if (findOnMapBtn) {
                findOnMapBtn.addEventListener('click', function() {
                    const address = addressInput.value.trim();
                    if (address) {
                        // Simulate geocoding - in real app, use Google Geocoding API
                        const bhopalLocations = {
                            "mp nagar": { lat: 23.2547, lng: 77.4030 },
                            "new market": { lat: 23.2590, lng: 77.4126 },
                            "10 number market": { lat: 23.2481, lng: 77.4319 },
                            "arera colony": { lat: 23.2515, lng: 77.4075 },
                            "habibganj": { lat: 23.2500, lng: 77.4050 },
                            "bhopal": { lat: 23.2599, lng: 77.4126 }
                        };
                        
                        let found = false;
                        for (const [key, coords] of Object.entries(bhopalLocations)) {
                            if (address.toLowerCase().includes(key)) {
                                currentMapCenter = coords;
                                latitudeInput.value = coords.lat.toFixed(4);
                                longitudeInput.value = coords.lng.toFixed(4);
                                found = true;
                                break;
                            }
                        }
                        
                        if (!found) {
                            // Default to Bhopal center
                            currentMapCenter = { lat: 23.2599, lng: 77.4126 };
                            latitudeInput.value = currentMapCenter.lat.toFixed(4);
                            longitudeInput.value = currentMapCenter.lng.toFixed(4);
                        }
                        
                        updateMapPreview();
                        showToast("Location found on map! You can adjust coordinates if needed.");
                    } else {
                        showToast("Please enter your business address first.");
                    }
                });
            }
            
            if (resetMapBtn) {
                resetMapBtn.addEventListener('click', function() {
                    currentMapCenter = { lat: 23.2599, lng: 77.4126 };
                    latitudeInput.value = currentMapCenter.lat.toFixed(4);
                    longitudeInput.value = currentMapCenter.lng.toFixed(4);
                    updateMapPreview();
                    showToast("Map reset to Bhopal center.");
                });
            }
            
            if (useCurrentLocationBtn) {
                useCurrentLocationBtn.addEventListener('click', function() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function(position) {
                            currentMapCenter = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            };
                            latitudeInput.value = currentMapCenter.lat.toFixed(6);
                            longitudeInput.value = currentMapCenter.lng.toFixed(6);
                            updateMapPreview();
                            showToast("Your current location has been set. Please verify the coordinates.");
                        }, function() {
                            showToast("Unable to get your location. Please enable location services or enter coordinates manually.");
                        });
                    } else {
                        showToast("Geolocation is not supported by your browser.");
                    }
                });
            }
            
            // Update map when coordinates change
            latitudeInput.addEventListener('change', updateMapPreview);
            longitudeInput.addEventListener('change', updateMapPreview);

            // Search functionality
            if (searchBox) {
                // Debounce search to improve performance
                let searchTimeout;
                searchBox.addEventListener('input', function(e) {
                    clearTimeout(searchTimeout);
                    
                    searchTimeout = setTimeout(() => {
                        currentSearch = e.target.value.toLowerCase().trim();
                        
                        // Show loading
                        listingsContainer.innerHTML = '';
                        loadingSpinner.style.display = 'block';
                        
                        setTimeout(() => {
                            filterListings();
                            loadingSpinner.style.display = 'none';
                            
                            if (currentSearch) {
                                showToast(`Search results for "${e.target.value}"`);
                            }
                        }, 300);
                    }, 500);
                });
                
                // Clear search button
                searchBox.addEventListener('keyup', function(e) {
                    if (e.key === 'Escape') {
                        this.value = '';
                        currentSearch = '';
                        filterListings();
                    }
                });
            }

            // Load more businesses
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', function() {
                    if (!showingAdditional && !isLoading) {
                        isLoading = true;
                        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                        
                        // Simulate loading delay
                        setTimeout(() => {
                            loadedBusinesses = [...businesses, ...additionalBusinesses];
                            showingAdditional = true;
                            isLoading = false;
                            
                            this.innerHTML = '<i class="fas fa-check"></i> All Businesses Loaded';
                            this.classList.add('disabled');
                            this.disabled = true;
                            
                            filterListings();
                            showToast('All businesses loaded successfully');
                        }, 1000);
                    }
                });
            }

            // ✅ Business form submission with EmailJS
            if (businessForm) {
                businessForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Validate required fields including map coordinates
                    const requiredFields = ['businessName', 'category', 'address', 'phone', 'description', 'latitude', 'longitude'];
                    let isValid = true;
                    
                    requiredFields.forEach(fieldId => {
                        const field = document.getElementById(fieldId);
                        if (!field.value.trim()) {
                            isValid = false;
                            field.style.borderColor = '#ff4444';
                        } else {
                            field.style.borderColor = '#ddd';
                        }
                    });
                    
                    if (!isValid) {
                        showToast('Please fill all required fields (including map coordinates)');
                        return;
                    }
                    
                    // Prepare form data for EmailJS
                    const formData = {
                        business_name: document.getElementById('businessName').value,
                        category: document.getElementById('category').value,
                        address: document.getElementById('address').value,
                        phone: document.getElementById('phone').value,
                        email: document.getElementById('email').value || 'Not provided',
                        website: document.getElementById('website').value || 'Not provided',
                        description: document.getElementById('description').value,
                        services: document.getElementById('services').value || 'Not provided',
                        hours: document.getElementById('openingTime').value + ' - ' + document.getElementById('closingTime').value,
                        coordinates: document.getElementById('latitude').value + ', ' + document.getElementById('longitude').value,
                        submission_date: new Date().toLocaleString(),
                        to_email: 'veenitdhankar292@gmail.com'
                    };
                    
                    // ✅ Send Email using EmailJS with YOUR Service ID and Template ID
                    emailjs.send('service_mgt9npg', 'template_c1v2ts3', formData)
                        .then(function(response) {
                            console.log('Email sent successfully!', response.status, response.text);
                            
                            // Show success message
                            successMessage.style.display = 'block';
                            businessForm.style.display = 'none';
                            
                            // Show toast
                            showToast('Business listing submitted successfully! Email sent.');
                            
                            // Scroll to top of contact section
                            document.getElementById('contact').scrollIntoView({ 
                                behavior: 'smooth' 
                            });
                            
                            // Reset form after 5 seconds
                            setTimeout(() => {
                                businessForm.reset();
                                successMessage.style.display = 'none';
                                businessForm.style.display = 'block';
                                currentMapCenter = { lat: 23.2547, lng: 77.4030 };
                                latitudeInput.value = currentMapCenter.lat.toFixed(4);
                                longitudeInput.value = currentMapCenter.lng.toFixed(4);
                                updateMapPreview();
                                showToast('Form reset. You can submit another listing.');
                            }, 5000);
                        }, function(error) {
                            console.log('EmailJS error:', error);
                            // Still show success message even if email fails
                            successMessage.style.display = 'block';
                            businessForm.style.display = 'none';
                            
                            showToast('Form submitted but email notification failed. We will still process your listing.');
                            
                            setTimeout(() => {
                                businessForm.reset();
                                successMessage.style.display = 'none';
                                businessForm.style.display = 'block';
                                currentMapCenter = { lat: 23.2547, lng: 77.4030 };
                                latitudeInput.value = currentMapCenter.lat.toFixed(4);
                                longitudeInput.value = currentMapCenter.lng.toFixed(4);
                                updateMapPreview();
                            }, 5000);
                        });
                });
            }

            // List business button
            if (heroListBusinessBtn) {
                heroListBusinessBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.getElementById('contact').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                    showToast('Fill the form to list your business');
                });
            }

            // Footer category links
            document.querySelectorAll('.footer-category').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const category = this.getAttribute('data-category');
                    
                    // Update active category
                    categoryCards.forEach(c => {
                        c.classList.remove('active');
                        if (c.getAttribute('data-category') === category) {
                            c.classList.add('active');
                        }
                    });
                    
                    // Show loading
                    listingsContainer.innerHTML = '';
                    loadingSpinner.style.display = 'block';
                    
                    setTimeout(() => {
                        currentCategory = category;
                        filterListings();
                        loadingSpinner.style.display = 'none';
                        
                        // Scroll to listings
                        document.getElementById('listings').scrollIntoView({ 
                            behavior: 'smooth' 
                        });
                        
                        showToast(`Showing ${getCategoryName(category)} category`);
                    }, 300);
                });
            });

            // Modal open handlers
            const modals = [
                { link: aboutLink, modal: aboutModal },
                { link: privacyLink, modal: privacyModal },
                { link: termsLink, modal: termsModal },
                { link: disclaimerLink, modal: disclaimerModal }
            ];
            
            modals.forEach(({ link, modal }) => {
                if (link) {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                    });
                }
            });

            // Modal close handlers
            const closeButtons = [
                { btn: closeAbout, modal: aboutModal },
                { btn: closePrivacy, modal: privacyModal },
                { btn: closeTerms, modal: termsModal },
                { btn: closeDisclaimer, modal: disclaimerModal }
            ];
            
            closeButtons.forEach(({ btn, modal }) => {
                if (btn) {
                    btn.addEventListener('click', function() {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    });
                }
            });

            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === aboutModal) {
                    aboutModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                if (event.target === privacyModal) {
                    privacyModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                if (event.target === termsModal) {
                    termsModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                if (event.target === disclaimerModal) {
                    disclaimerModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });

            // Scroll to top button
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    scrollToTop.classList.add('visible');
                } else {
                    scrollToTop.classList.remove('visible');
                }
            });
            
            scrollToTop.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                showToast('Scrolled to top');
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href === '#' || href === '#!') return;
                    
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        // Update Google Map preview
        function updateMapPreview() {
            const lat = latitudeInput.value || currentMapCenter.lat;
            const lng = longitudeInput.value || currentMapCenter.lng;
            
            const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.85820778933!2d77.23682942473105!3d23.199347693033407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1647421231234`;
            
            mapPreview.innerHTML = `
                <iframe 
                    src="${mapUrl}&q=${lat},${lng}&center=${lat},${lng}&zoom=15"
                    style="border:0; width:100%; height:100%;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            `;
        }

        // Filter listings based on category and search
        function filterListings() {
            let filtered = loadedBusinesses;
            
            // Apply category filter
            if (currentCategory !== 'all') {
                filtered = filtered.filter(business => business.category === currentCategory);
            }
            
            // Apply search filter
            if (currentSearch) {
                filtered = filtered.filter(business => {
                    // Check if business name matches
                    if (business.name && business.name.toLowerCase().includes(currentSearch)) {
                        return true;
                    }
                    
                    // Check if description matches
                    if (business.description && business.description.toLowerCase().includes(currentSearch)) {
                        return true;
                    }
                    
                    // Check if address matches
                    if (business.address && business.address.toLowerCase().includes(currentSearch)) {
                        return true;
                    }
                    
                    // Check if services match
                    if (business.services) {
                        for (let service of business.services) {
                            if (service.toLowerCase().includes(currentSearch)) {
                                return true;
                            }
                        }
                    }
                    
                    // Check job details for job listings
                    if (business.type === 'job') {
                        if (business.jobDetails) {
                            // Check company name
                            if (business.jobDetails.company && business.jobDetails.company.toLowerCase().includes(currentSearch)) {
                                return true;
                            }
                            
                            // Check location
                            if (business.jobDetails.location && business.jobDetails.location.toLowerCase().includes(currentSearch)) {
                                return true;
                            }
                            
                            // Check description
                            if (business.jobDetails.description && business.jobDetails.description.toLowerCase().includes(currentSearch)) {
                                return true;
                            }
                        }
                    }
                    
                    return false;
                });
            }
            
            // Render filtered listings
            if (filtered.length === 0) {
                renderNoResults();
            } else {
                renderListings(filtered);
            }
        }

        // Render listings to the DOM
        function renderListings(businessesToRender) {
            listingsContainer.innerHTML = '';
            
            businessesToRender.forEach(business => {
                let listingElement;
                if (business.type === 'job') {
                    listingElement = createJobElement(business);
                } else {
                    listingElement = createBusinessElement(business);
                }
                listingsContainer.appendChild(listingElement);
            });
        }

        // Create a job listing element
        function createJobElement(job) {
            const listing = document.createElement('div');
            listing.className = 'job-listing-card';
            listing.setAttribute('data-category', job.category);
            
            listing.innerHTML = `
                <div class="job-header">
                    <div class="job-title-row">
                        <div class="job-title">${job.name}</div>
                        <div class="job-type">${job.jobDetails.jobType}</div>
                    </div>
                    <div class="job-company">
                        <i class="fas fa-building"></i> ${job.jobDetails.company}
                    </div>
                    <div class="job-location">
                        <i class="fas fa-map-marker-alt"></i> ${job.jobDetails.location}
                        <span style="margin-left: auto; font-size: 14px; color: #666;">
                            <i class="far fa-clock"></i> Posted ${job.jobDetails.postedDate}
                        </span>
                    </div>
                </div>
                <div class="job-body">
                    <div class="job-details-grid">
                        <div class="job-detail-item">
                            <div class="job-detail-label">Salary (Annual)</div>
                            <div class="job-detail-value">${job.jobDetails.salary}</div>
                        </div>
                        <div class="job-detail-item">
                            <div class="job-detail-label">Experience Required</div>
                            <div class="job-detail-value">${job.jobDetails.experience}</div>
                        </div>
                        <div class="job-detail-item">
                            <div class="job-detail-label">Job Type</div>
                            <div class="job-detail-value">${job.jobDetails.jobType}</div>
                        </div>
                        <div class="job-detail-item">
                            <div class="job-detail-label">Vacancies</div>
                            <div class="job-detail-value">${job.jobDetails.vacancies} positions</div>
                        </div>
                    </div>
                    
                    <div class="job-description">
                        <h4>Job Description</h4>
                        <p>${job.jobDetails.description}</p>
                    </div>
                    
                    <div class="job-requirements">
                        <h4>Requirements:</h4>
                        <ul class="requirements-list">
                            ${job.jobDetails.requirements.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                    </div>
                    
                    ${job.jobDetails.benefits ? `
                    <div class="job-requirements">
                        <h4>Benefits & Perks:</h4>
                        <ul class="requirements-list">
                            ${job.jobDetails.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    <div class="job-actions">
                        <button class="job-apply-btn" onclick="applyForJob('${job.name}', '${job.jobDetails.company}')">
                            <i class="fas fa-paper-plane"></i> Apply Now
                        </button>
                        <button class="job-save-btn" onclick="saveJob('${job.id}')">
                            <i class="far fa-bookmark"></i> Save Job
                        </button>
                    </div>
                </div>
            `;
            
            return listing;
        }

        // Create a business listing element
        function createBusinessElement(business) {
            const listing = document.createElement('div');
            listing.className = 'listing-card';
            listing.setAttribute('data-category', business.category);
            
            // Generate stars HTML
            const fullStars = Math.floor(business.rating);
            const hasHalfStar = business.rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            
            let starsHTML = '';
            for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star"></i>';
            if (hasHalfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>';
            for (let i = 0; i < emptyStars; i++) starsHTML += '<i class="far fa-star"></i>';
            
            listing.innerHTML = `
                <div class="listing-header">
                    <div class="listing-title">
                        <h3>${business.name}</h3>
                        ${business.verified ? '<span class="verified-badge">✓ Verified</span>' : ''}
                    </div>
                    <div class="listing-rating">
                        <span>${starsHTML}</span>
                        <span>${business.rating}/5 (${business.reviews} reviews)</span>
                    </div>
                    <div class="listing-category">
                        <i class="fas fa-tag"></i> ${getCategoryName(business.category)}
                    </div>
                </div>
                <div class="listing-body">
                    <div class="listing-description">
                        ${business.description}
                    </div>
                    
                    <div class="listing-services">
                        <h4>Services</h4>
                        <ul class="services-list">
                            ${business.services.map(service => `<li>${service}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="listing-details">
                        <div class="detail-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${business.address}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-clock"></i>
                            <span>${business.hours}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-phone"></i>
                            <span>${business.phone}</span>
                        </div>
                    </div>
                    
                    <div class="map-container">
                        <iframe 
                            src="https://maps.google.com/maps?q=${business.map}&z=15&output=embed"
                            allowfullscreen>
                        </iframe>
                    </div>
                    
                    <div class="listing-actions">
                        <button class="action-btn call-btn" onclick="callBusiness('${business.phone}')">
                            <i class="fas fa-phone"></i> Call
                        </button>
                        <button class="action-btn whatsapp-btn" onclick="whatsappBusiness('${business.whatsapp}')">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </button>
                        <button class="action-btn directions-btn" onclick="openDirections('${business.map}')">
                            <i class="fas fa-directions"></i> Directions
                        </button>
                    </div>
                </div>
            `;
            
            return listing;
        }

        // Render no results message
        function renderNoResults() {
            listingsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No businesses found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                    <button onclick="resetFilters()" style="margin-top: 20px; padding: 10px 20px; background-color: var(--primary); color: white; border: none; border-radius: 5px; cursor: pointer;">
                        <i class="fas fa-redo"></i> Reset Filters
                    </button>
                </div>
            `;
        }

        // Get category display name
        function getCategoryName(category) {
            const categories = {
                'all': 'All Businesses',
                'food': 'Food & Dining',
                'services': 'Services',
                'shops': 'Shops & Retail',
                'jobs': 'Jobs & Careers',
                'health': 'Health & Medical',
                'education': 'Education',
                'automobile': 'Automobile',
                'realestate': 'Real Estate',
                'electronics': 'Electronics',
                'travel': 'Travel & Tourism',
                'beauty': 'Beauty & Spa',
                'events': 'Events & Wedding',
                'legal': 'Legal Services',
                'homeappliances': 'Home Appliances'
            };
            return categories[category] || category;
        }
        
        // Reset filters function
        function resetFilters() {
            currentCategory = 'all';
            currentSearch = '';
            searchBox.value = '';
            
            categoryCards.forEach(c => {
                c.classList.remove('active');
                if (c.getAttribute('data-category') === 'all') {
                    c.classList.add('active');
                }
            });
            
            filterListings();
            showToast('Filters reset successfully');
        }
    </script>

    <script>
        // Business action functions
        function callBusiness(phoneNumber) {
            if (confirm(`Call ${phoneNumber}?`)) {
                window.location.href = `tel:${phoneNumber}`;
            }
        }

        function whatsappBusiness(whatsappNumber) {
            const message = `Hello, I'm interested in your business listed on Bhopal Bazaar`;
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        function openDirections(coordinates) {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates}`;
            window.open(url, '_blank');
        }

        // Job functions
        function applyForJob(jobTitle, company) {
            alert(`Applying for: ${jobTitle}\nCompany: ${company}\n\nIn a real application, this would open an application form.`);
        }

        function saveJob(jobId) {
            alert(`Job saved to your favorites! Job ID: ${jobId}`);
        }
        
        // Reset filters function (global)
        window.resetFilters = function() {
            if (typeof resetFilters === 'function') {
                resetFilters();
            }
        };

        // Make functions available globally for onclick handlers
        window.callBusiness = callBusiness;
        window.whatsappBusiness = whatsappBusiness;
        window.openDirections = openDirections;
        window.applyForJob = applyForJob;
        window.saveJob = saveJob;
    </script>
</body>
</html>