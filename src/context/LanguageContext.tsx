import React, { createContext, useContext, useState, useEffect } from "react";
import { extendedTranslations } from "./translations";

export type LanguageCode = "en" | "hi" | "ja" | "zh" | "ko";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
}

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "zh", name: "Chinese", nativeName: "中文" },
  { code: "ko", name: "Korean", nativeName: "한국어" },
];

const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Navbar
    "nav.savings": "Savings Calculator",
    "nav.careers": "Careers",
    "nav.pricing": "Pricing",
    "nav.blog": "Trust Blog",
    "nav.help": "Help",
    "nav.login": "Login",
    
    // Hero
    "hero.live": "Currently live in Metro Cities",
    "hero.title1": "Find trusted homes ",
    "hero.title2": "with ",
    "hero.title_accent": "Inhaby",
    "hero.subtitle_mobile": "Discover verified homes directly from owners—zero brokerage, zero surprises.",
    "hero.subtitle_desktop": "Discover verified homes, connect directly with verified owners, and rent with confidence—without brokerage or hidden surprises.",
    
    // Buttons
    "btn.explore": "Explore Verified Homes",
    "btn.trust_score": "Check Rent Trust Score",
    "btn.verify_now": "Verify My Rental Now",
    "btn.owner_list": "List Property (Free)",

    // Carousel
    "carousel.badge_verified": "VERIFIED",
    "carousel.badge_no_brokerage": "NO BROKERAGE",
    "carousel.badge_just_updated": "JUST UPDATED",
    "carousel.title": "Handpicked Verified Listings",
    "carousel.subtitle": "Updated daily. Hand-screened, verified directly with land registry deeds.",
    "carousel.view_all": "View All 1,200+ Listings",
    "carousel.verify_property": "Verify Property",
    "carousel.direct_owner": "Direct Owner",

    // Journeys
    "journey.tab_journey": "Tenant & Landlord Journeys",
    "journey.tab_verification": "Automated Document Verification",
    "journey.badge_trusted": "TRUSTED & VERIFIED",
    "journey.title_renter": "Looking for a home?",
    "journey.title_landlord": "Want to list your property?",
    "journey.step_1": "1. Find Verified Homes",
    "journey.step_2": "2. Direct Connection",
    "journey.step_3": "3. Transparent Contracts",
    "journey.step_4": "4. Safe Deposit Box",
    "journey.desc_1": "Explore properties that are physically verified and matched with legal title deeds.",
    "journey.desc_2": "Communicate directly with landlords without any pushy middleman or broker.",
    "journey.desc_3": "Digitally sign state-approved rental contracts with immutable tamper-proof logs.",
    "journey.desc_4": "Keep your security deposit secured in a joint-escrow trust account.",
  },
  hi: {
    // Navbar
    "nav.savings": "बचत कैलकुलेटर",
    "nav.careers": "करियर",
    "nav.pricing": "मूल्य निर्धारण",
    "nav.blog": "ट्रस्ट ब्लॉग",
    "nav.help": "सहायता",
    "nav.login": "लॉगिन",
    
    // Hero
    "hero.live": "वर्तमान में मेट्रो शहरों में लाइव",
    "hero.title1": "भरोसेमंद घर खोजें ",
    "hero.title2": "सिर्फ ",
    "hero.title_accent": "इनहैबी पर",
    "hero.subtitle_mobile": "सीधे मालिकों से सत्यापित घर खोजें—शून्य दलाली, शून्य आश्चर्य।",
    "hero.subtitle_desktop": "सत्यापित घर खोजें, सत्यापित मालिकों से सीधे जुड़ें, और विश्वास के साथ किराए पर लें—बिना किसी दलाली या छिपे हुए आश्चर्य के।",
    
    // Buttons
    "btn.explore": "सत्यापित घर खोजें",
    "btn.trust_score": "रेंट ट्रस्ट स्कोर जांचें",
    "btn.verify_now": "अभी सत्यापन कराएं",
    "btn.owner_list": "संपत्ति सूचीबद्ध करें (मुफ़्त)",

    // Carousel
    "carousel.badge_verified": "सत्यापित",
    "carousel.badge_no_brokerage": "कोई दलाली नहीं",
    "carousel.badge_just_updated": "अभी अपडेट किया गया",
    "carousel.title": "चुनिंदा सत्यापित सूचियां",
    "carousel.subtitle": "दैनिक अपडेटेड। भूमि रजिस्ट्री विलेखों के साथ सीधे सत्यापित किया गया।",
    "carousel.view_all": "सभी 1,200+ सूचियां देखें",
    "carousel.verify_property": "संपत्ति सत्यापित करें",
    "carousel.direct_owner": "सीधे मालिक",

    // Journeys
    "journey.tab_journey": "किराएदार और मकान मालिक यात्रा",
    "journey.tab_verification": "स्वचालित दस्तावेज़ सत्यापन",
    "journey.badge_trusted": "भरोसेमंद और सत्यापित",
    "journey.title_renter": "घर की तलाश है?",
    "journey.title_landlord": "अपनी संपत्ति सूचीबद्ध करना चाहते हैं?",
    "journey.step_1": "1. सत्यापित घर खोजें",
    "journey.step_2": "2. सीधा संपर्क",
    "journey.step_3": "3. पारदर्शी अनुबंध",
    "journey.step_4": "4. सुरक्षित जमा बॉक्स",
    "journey.desc_1": "उन संपत्तियों का पता लगाएं जो भौतिक रूप से सत्यापित हैं और कानूनी विलेखों से मेल खाती हैं।",
    "journey.desc_2": "बिना किसी बिचौलिए या दलाल के सीधे मकान मालिकों से संपर्क करें।",
    "journey.desc_3": "अपरिवर्तनीय छेड़छाड़-मुक्त लॉग के साथ डिजिटल रूप से राज्य-अनुमोदित अनुबंधों पर हस्ताक्षर करें।",
    "journey.desc_4": "अपनी सुरक्षा जमा राशि को एक संयुक्त एस्क्रो ट्रस्ट खाते में सुरक्षित रखें।",
  },
  ja: {
    // Navbar
    "nav.savings": "節約計算ツール",
    "nav.careers": "採用情報",
    "nav.pricing": "料金プラン",
    "nav.blog": "トラストブログ",
    "nav.help": "ヘルプ",
    "nav.login": "ログイン",
    
    // Hero
    "hero.live": "現在、主要都市でサービス提供中",
    "hero.title1": "信頼できる住まいを ",
    "hero.title2": "、 ",
    "hero.title_accent": "Inhabyで見つける",
    "hero.subtitle_mobile": "オーナーから直接、検証済みの物件を見つけましょう。仲介手数料ゼロ、予期せぬトラブルもありません。",
    "hero.subtitle_desktop": "検証済みの家を見つけ、検証済みのオーナーと直接つながり、安心してレンタルできます。仲介手数料や隠れた費用はありません。",
    
    // Buttons
    "btn.explore": "検証済みの物件を探す",
    "btn.trust_score": "家賃信頼スコアをチェック",
    "btn.verify_now": "今すぐ検証する",
    "btn.owner_list": "物件を掲載する（無料）",

    // Carousel
    "carousel.badge_verified": "検証済み",
    "carousel.badge_no_brokerage": "仲介手数料なし",
    "carousel.badge_just_updated": "新着情報",
    "carousel.title": "厳選された検証済み物件",
    "carousel.subtitle": "毎日更新。不動産登記簿と直接照合・検証済み。",
    "carousel.view_all": "すべての1,200件以上の物件を見る",
    "carousel.verify_property": "物件を検証する",
    "carousel.direct_owner": "オーナー直接物件",

    // Journeys
    "journey.tab_journey": "テナント＆ランドロードのジャーニー",
    "journey.tab_verification": "自動ドキュメント検証",
    "journey.badge_trusted": "信頼＆検証済み",
    "journey.title_renter": "お家をお探しですか？",
    "journey.title_landlord": "物件を掲載しますか？",
    "journey.step_1": "1. 検証済みの家を見つける",
    "journey.step_2": "2. 直接つながる",
    "journey.step_3": "3. 透明性のある契約",
    "journey.step_4": "4. 安全な預金管理",
    "journey.desc_1": "現地調査が行われ、法的な所有権登記簿と照合された安全な物件を探索できます。",
    "journey.desc_2": "強引な代理人や仲介業者を介さず、オーナーと直接やり取りが可能です。",
    "journey.desc_3": "改ざん不可能なデジタルログを使用して、州承認の賃貸契約に安全に署名します。",
    "journey.desc_4": "お客様の保証金を、共同エスクロー信託口座で安全に保管・管理します。",
  },
  zh: {
    // Navbar
    "nav.savings": "省钱计算器",
    "nav.careers": "职业生涯",
    "nav.pricing": "定价",
    "nav.blog": "信任博客",
    "nav.help": "帮助",
    "nav.login": "登录",
    
    // Hero
    "hero.live": "目前已在各大都市开通",
    "hero.title1": "寻找值得信赖的房源 ",
    "hero.title2": "就在 ",
    "hero.title_accent": "Inhaby",
    "hero.subtitle_mobile": "直接向业主寻找经过验证的房源——零中介费，零套路。",
    "hero.subtitle_desktop": "发现经过验证的房源，直接与经过验证的业主联系，充满信心地租房——无需中介费，也无隐藏费用。",
    
    // Buttons
    "btn.explore": "浏览已验证房源",
    "btn.trust_score": "测试租房信用分",
    "btn.verify_now": "立即验证我的租赁",
    "btn.owner_list": "免费发布房源",

    // Carousel
    "carousel.badge_verified": "已验证",
    "carousel.badge_no_brokerage": "零中介费",
    "carousel.badge_just_updated": "刚刚更新",
    "carousel.title": "严选已验证房源",
    "carousel.subtitle": "每日更新。通过土地产权契据直接进行人工严格审核和验证。",
    "carousel.view_all": "查看全部 1,200+ 房源",
    "carousel.verify_property": "验证房源",
    "carousel.direct_owner": "业主直租",

    // Journeys
    "journey.tab_journey": "租客与房东指南",
    "journey.tab_verification": "自动化文档验证",
    "journey.badge_trusted": "信赖与安全",
    "journey.title_renter": "正在寻找温馨的家？",
    "journey.title_landlord": "想要发布您的房源？",
    "journey.step_1": "1. 寻找已验证房源",
    "journey.step_2": "2. 与业主直连",
    "journey.step_3": "3. 透明化的电子合同",
    "journey.step_4": "4. 押金信托托管",
    "journey.desc_1": "浏览经过实地考察并与法律契据完美匹配的真实房源。",
    "journey.desc_2": "直接与房东进行沟通，避开中介话术和高昂中介费。",
    "journey.desc_3": "在线签署受法律保护的合同，具备防篡改的区块链式存证日志。",
    "journey.desc_4": "将您的租房押金安全存管在受监管的联合托管信托账户中。",
  },
  ko: {
    // Navbar
    "nav.savings": "절약 계산기",
    "nav.careers": "채용 정보",
    "nav.pricing": "요금 안내",
    "nav.blog": "신뢰 블로그",
    "nav.help": "도움말",
    "nav.login": "로그인",
    
    // Hero
    "hero.live": "현재 대도시 서비스 제공 중",
    "hero.title1": "신뢰할 수 있는 집 찾기 ",
    "hero.title2": "오직 ",
    "hero.title_accent": "Inhaby에서",
    "hero.subtitle_mobile": "집주인으로부터 직접 검증된 주택을 찾아보세요 — 중개 수수료 제로, 예상치 못한 비용 제로.",
    "hero.subtitle_desktop": "검증된 집을 찾고, 검증된 집주인과 직접 소통하며 안심하고 렌트하세요 — 중개 수수료나 숨겨진 비용 없이.",
    
    // Buttons
    "btn.explore": "검증된 주택 둘러보기",
    "btn.trust_score": "렌트 신뢰 등급 확인",
    "btn.verify_now": "지금 즉시 임대 검증하기",
    "btn.owner_list": "내 매물 등록하기 (무료)",

    // Carousel
    "carousel.badge_verified": "인증 완료",
    "carousel.badge_no_brokerage": "중개료 없음",
    "carousel.badge_just_updated": "방금 업데이트",
    "carousel.title": "엄선된 검증 완료 매물",
    "carousel.subtitle": "매일 업데이트. 토지 대장 및 등기부 등본과 직접 교차 대조하여 실시간 확인 완료.",
    "carousel.view_all": "전체 1,200+ 매물 보기",
    "carousel.verify_property": "매물 검증하기",
    "carousel.direct_owner": "집주인 직거래",

    // Journeys
    "journey.tab_journey": "세입자 & 임대인 맞춤 여정",
    "journey.tab_verification": "자동화 서류 검증 시스템",
    "journey.badge_trusted": "신뢰 및 검증 완료",
    "journey.title_renter": "집을 찾고 계신가요?",
    "journey.title_landlord": "소유한 매물을 올리고 싶으신가요?",
    "journey.step_1": "1. 검증된 매물 찾기",
    "journey.step_2": "2. 집주인 직접 연결",
    "journey.step_3": "3. 투명한 임대차 계약",
    "journey.step_4": "4. 안전 보증금 에스크로",
    "journey.desc_1": "현장 조사를 완수하고 실제 법적 소유권 대장과 일치하는 실매물만 탐색합니다.",
    "journey.desc_2": "불필요한 중개 수수료나 집값 띄우기 없이 집주인과 안전하게 직접 연락합니다.",
    "journey.desc_3": "정부 표준 임대 계약서를 기반으로 위변조 방지 기술이 적용된 계약을 디지털로 체결합니다.",
    "journey.desc_4": "안전하게 회수할 수 있도록 보증금을 금융사 연계 공동 에스크로 계좌에 예치합니다.",
  },
};

// Global map to track original English values of DOM text nodes and input placeholders
const originalTexts = new WeakMap<Node, string>();

/**
 * Normalizes text and searches both the base structured translations and 
 * the deep translation dictionary to locate a perfect translation.
 */
function getTranslationForText(text: string, lang: LanguageCode): string {
  if (lang === "en") return text;
  
  const trimmed = text.trim();
  if (!trimmed) return text;

  // 1. Direct match in the comprehensive extended dictionary
  const extDict = extendedTranslations[lang] || {};
  if (extDict[trimmed]) {
    return extDict[trimmed];
  }

  // 2. Lookup matching English text in the base translations object
  const enBase = translations["en"] || {};
  const langBase = translations[lang] || {};
  const foundKey = Object.keys(enBase).find((k) => enBase[k] === trimmed);
  if (foundKey && langBase[foundKey]) {
    return langBase[foundKey];
  }

  // 3. Fallback: Case-insensitive dictionary lookup
  const lowerTrimmed = trimmed.toLowerCase();
  for (const [enKey, transVal] of Object.entries(extDict)) {
    if (enKey.toLowerCase() === lowerTrimmed) {
      return transVal;
    }
  }

  // 4. Exact dictionary fallback for core terms
  if (trimmed === "Brokerage") {
    return lang === "hi" ? "दलाली" : lang === "ja" ? "仲介手数料" : lang === "zh" ? "中介费" : lang === "ko" ? "중개 수수료" : trimmed;
  }
  if (trimmed === "Free") {
    return lang === "hi" ? "मुफ़्त" : lang === "ja" ? "無料" : lang === "zh" ? "免费" : lang === "ko" ? "무료" : trimmed;
  }
  if (trimmed === "Value") {
    return lang === "hi" ? "मूल्य" : lang === "ja" ? "価値" : lang === "zh" ? "价值" : lang === "ko" ? "가치" : trimmed;
  }

  return text;
}

/**
 * Recursively walks DOM nodes starting from root, saving the original English text
 * and translating to the target language on the fly.
 */
function translateNode(node: Node, lang: LanguageCode) {
  if (node.nodeType === Node.TEXT_NODE) {
    const currentVal = node.nodeValue || "";
    if (!originalTexts.has(node)) {
      originalTexts.set(node, currentVal);
    }
    
    const originalVal = originalTexts.get(node) || currentVal;
    const trimmedOriginal = originalVal.trim();
    
    if (trimmedOriginal) {
      if (lang === "en") {
        if (node.nodeValue !== originalVal) {
          node.nodeValue = originalVal;
        }
      } else {
        const translated = getTranslationForText(trimmedOriginal, lang);
        if (translated !== trimmedOriginal) {
          const finalVal = originalVal.replace(trimmedOriginal, translated);
          if (node.nodeValue !== finalVal) {
            node.nodeValue = finalVal;
          }
        }
      }
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const el = node as Element;
    const tagName = el.tagName.toLowerCase();
    
    // Avoid translating code, style, scripts and system metadata
    if (tagName === "script" || tagName === "style" || tagName === "code" || tagName === "pre") {
      return;
    }

    // Input & Textarea placeholder translation
    if (tagName === "input" || tagName === "textarea") {
      const inputEl = el as HTMLInputElement | HTMLTextAreaElement;
      const placeholderVal = inputEl.placeholder || "";
      if (placeholderVal) {
        if (!originalTexts.has(inputEl)) {
          originalTexts.set(inputEl, placeholderVal);
        }
        const originalPlaceholder = originalTexts.get(inputEl) || placeholderVal;
        const trimmedOriginalPlaceholder = originalPlaceholder.trim();
        if (trimmedOriginalPlaceholder) {
          if (lang === "en") {
            if (inputEl.placeholder !== originalPlaceholder) {
              inputEl.placeholder = originalPlaceholder;
            }
          } else {
            const translatedPlaceholder = getTranslationForText(trimmedOriginalPlaceholder, lang);
            if (translatedPlaceholder !== trimmedOriginalPlaceholder) {
              inputEl.placeholder = translatedPlaceholder;
            }
          }
        }
      }
    }

    // Recurse children
    let child = node.firstChild;
    while (child) {
      translateNode(child, lang);
      child = child.nextSibling;
    }
  }
}

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Try to load language from URL parameter first, then localStorage
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang") as LanguageCode;
      if (urlLang && ["en", "hi", "ja", "zh", "ko"].includes(urlLang)) {
        return urlLang;
      }
    }
    const saved = localStorage.getItem("inhaby_language");
    return (saved as LanguageCode) || "en";
  });

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    localStorage.setItem("inhaby_language", code);
    const found = languages.find((l) => l.code === code);
    if (found) {
      localStorage.setItem("inhaby_language_name", found.name);
    }
    // Update URL query parameter without page reload
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", code);
      window.history.pushState({}, "", url.toString());
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  // Real-time DOM Translation hook and MutationObserver
  useEffect(() => {
    // 1. Correctly identify lang on HTML element for accessibility & screen readers
    document.documentElement.lang = language;

    // Update or add hreflang tags in the document head to prevent layout shifts & improve SEO
    const existingHreflangs = document.querySelectorAll("link[rel='alternate'][hreflang]");
    existingHreflangs.forEach((el) => el.remove());

    const currentUrl = new URL(window.location.href);
    
    // Add alternate links for each language
    languages.forEach((lang) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang.code;
      const url = new URL(currentUrl.toString());
      url.searchParams.set("lang", lang.code);
      link.href = url.toString();
      document.head.appendChild(link);
    });

    // Add x-default pointing to English or default URL without query param
    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.hreflang = "x-default";
    const defaultUrl = new URL(currentUrl.toString());
    defaultUrl.searchParams.delete("lang");
    defaultLink.href = defaultUrl.toString();
    document.head.appendChild(defaultLink);

    // 2. Trigger initial complete scan of document body
    translateNode(document.body, language);

    // 3. Setup robust MutationObserver to translate any newly added or modified nodes
    const observer = new MutationObserver((mutations) => {
      // Temporarily disconnect observer to prevent mutation loops during modifications
      observer.disconnect();

      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            translateNode(node, language);
          });
        } else if (mutation.type === "characterData") {
          const node = mutation.target;
          const currentVal = node.nodeValue || "";
          
          // Detect if React updated the node's underlying value, meaning the original has changed
          const originalVal = originalTexts.get(node);
          const expectedTranslated = originalVal ? getTranslationForText(originalVal.trim(), language) : "";
          const expectedFull = originalVal && expectedTranslated 
            ? originalVal.replace(originalVal.trim(), expectedTranslated) 
            : "";

          if (currentVal !== expectedFull && currentVal !== originalVal) {
            // New text rendered dynamically by React (e.g. calculator values); update original mapping
            originalTexts.set(node, currentVal);
          }
          
          translateNode(node, language);
        }
      });

      // Re-observe after handling modifications safely
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    // Cleanup observer on unmount or before next run
    return () => {
      observer.disconnect();
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
