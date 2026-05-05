import { API_CONFIG } from "./config";

const base = API_CONFIG.BASE_URL;
const new_base = API_CONFIG.NEW_BASE_URL;

function buildUrl(
  template: string,
  params?: Record<string, string | number>
): string {
  let url = template;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, String(value));
    });
  }
  return url;
}

export const ENDPOINTS = {
  aboutUs: `${base}/api/mobile/aboutus`,

  entrepreneurDevelopment: `${base}/api/mobile/entrepreneur-development`,
  entrepreneurDevelopmentDetail: (slug: string) =>
    buildUrl(`${base}/api/mobile/entrepreneur-development/{slug}`, { slug }),

  productDocumentary: `${base}/api/mobile/product-documentry`,
  industrialDetail: (category: string, slug: string) =>
    buildUrl(`${base}/api/mobile/industrialdetails/{category}/{slug}`, {
      category,
      slug,
    }),

  expertTalkTabs: `${base}/api/mobile/professionalepisodes-tab`,
  expertEpisode: (slug: string) =>
    buildUrl(`${base}/api/mobile/expert-episode/{slug}`, { slug }),

  projectReports: `${base}/api/mobile/v1/project-reports?page=1`,
  projectReportSearch: `${base}/api/mobile/report-search`,
  projectReportDetail: (slug: string) =>
    buildUrl(`${base}/api/mobile/reportdetails/{slug}`, { slug }),

  districts: `${base}/api/mobile/districts`,
  marketplaceProductList: (districtId: string | number) =>
    buildUrl(
      `${base}/api/mobile/marketplace-product-list?districtid={districtId}`,
      { districtId }
    ),

  successStories: `${base}/api/mobile/v1/get-success-story?page=1`,
  loanLinkCategory: `${base}/api/mobile/link-category-component`,
  governmentSchemes: `${base}/api/mobile/government-scheme`,

  hamaraPradeshDistricts: `${base}/api/mobile/districts`,
  hamaraPradeshVideoIntro: `${base}/api/mobile/district-intro/`,
  hamaraPradeshDetail: (slug: string) =>
    buildUrl(`${base}/api/mobile/district/{slug}`, { slug }),

  industrialSolutions: `${base}/api/mobile/industrial-solutions`,
  industrialSolutionDetail: (category: string, slug: string) =>
    buildUrl(`${base}/api/mobile/industrialdetails/{category}/{slug}`, {
      category,
      slug,
    }),

  workshop: `${base}/api/mobile/workshop`,
  upcomingWorkshops: (limit: number) =>
    buildUrl(`${base}/api/mobile/wed/workshop?limit={limit}`, { limit }),
  uploadProfileImage: `${base}/api/mobile/wed/image-upload`,

  collegeCourses: {
    industrial: `${base}/api/mobile/categories/courses`,
    professional: `${base}/api/mobile/categories/professional-courses`,
    technical: `${base}/api/mobile/categories/technical-courses`,
    competitive: `${base}/api/mobile/categories/competitive-courses`,
    udyamitaForYouth: `${base}/api/mobile/categories/udyamita-for-youth`,
    careerCounselling: `${base}/api/mobile/categories/career-counselling`,
  },

  collegeCoursesAuth: {
    industrial: `${base}/api/mobile/wed/categories/courses`,
    professional: `${base}/api/mobile/wed/categories/professional-courses`,
    technical: `${base}/api/mobile/wed/categories/technical-courses`,
    competitive: `${base}/api/mobile/wed/categories/competitive-courses`,
    udyamitaForYouth: `${base}/api/mobile/wed/categories/udyamita-for-youth`,
    documentaries: `${base}/api/mobile/wed/categories/documentaries-youth`,
    projectReport: `${base}/api/mobile/wed/categories/project-reportyouth`,
  },

  courseDetail: (slug: string, subSlug: string) =>
    buildUrl(`${base}/api/mobile/courses/{slug}/{subSlug}/`, {
      slug,
      subSlug,
    }),
  courseDetailAuth: (slug: string, subSlug: string) =>
    buildUrl(`${base}/api/mobile/wed/courses/{slug}/{subSlug}/`, {
      slug,
      subSlug,
    }),

  jobVacancy: `${base}/api/mobile/job-vacancy`,
  jobVacancyAuth: `${base}/api/mobile/wed/job-vacancy`,

  schoolCbse: `${base}/api/mobile/cbse`,
  schoolCbseAuth: `${base}/api/mobile/wed/cbse`,
  schoolSubjectDetail: (classSlug: string) =>
    buildUrl(`${base}/api/mobile/cbse/{classSlug}`, { classSlug }),
  schoolSubjectDetailAuth: (classSlug: string) =>
    buildUrl(`${base}/api/mobile/wed/cbse/{classSlug}`, { classSlug }),

  schoolCategories: {
    projectWork: `${base}/api/mobile/categories/project-work`,
    careerCounselling: `${base}/api/mobile/categories/careercounselling`,
    orientationCourses: `${base}/api/mobile/categories/orientation-courses`,
    industrialTour: `${base}/api/mobile/categories/industrial-tour`,
    expertTalk: `${base}/api/mobile/categories/expert-talk`,
    carrierCourses: `${base}/api/mobile/categories/carrier-courses`,
    competitiveExam: `${base}/api/mobile/categories/competitive-exam`,
  },

  schoolCategoriesAuth: {
    projectWork: `${base}/api/mobile/wed/categories/project-work`,
    careerCounselling: `${base}/api/mobile/wed/categories/careercounselling`,
    orientationCourses: `${base}/api/mobile/wed/categories/orientation-courses`,
    industrialTour: `${base}/api/mobile/wed/categories/industrial-tour`,
    expertTalk: `${base}/api/mobile/wed/categories/expert-talk`,
    carrierCourses: `${base}/api/mobile/wed/categories/carrier-courses`,
    competitiveExam: `${base}/api/mobile/wed/categories/competitive-exam`,
  },

  marketplaceAuth: {
    districts: `${base}/api/mobile/wed/districts`,
    create: `${base}/api/mobile/create-marketplace`,
    createProduct: `${base}/api/mobile/wed/create-marketplace-product`,
    productListCategory: `${base}/api/mobile/wed/product-list-category`,
  },

  profile: `${base}/api/mobile/wed/profile`,
  profileUpdate: `${base}/api/mobile/wed/profile-update`,

  classCurriculum: `${base}/api/mobile/wed/class-curuculum`,

  certificate: {
    udyamitaProgress: (categoryId: string | number) =>
      buildUrl(
        `${base}/api/mobile/auth/entrepreneur-development?category_id={categoryId}`,
        { categoryId }
      ),
    udyamitaList: `${base}/api/mobile/entrepreneur-development`,
    storeUserProgress: (slug: string, id: string | number) =>
      buildUrl(
        `${base}/api/mobile/wed/entrepreneur-development/user-progress/{slug}?id={id}`,
        { slug, id }
      ),
    getQuestions: (slug: string, id: string | number) =>
      buildUrl(
        `${base}/api/mobile/entrepreneur-development/{slug}/assessment/get-questions?id={id}`,
        { slug, id }
      ),
    submitAnswer: `${base}/api/mobile/wed/assessment/answer`,
    submitAssessment: `${base}/api/mobile/wed/assessment/submit`,
    downloadAnswerKey: (slug: string, id: string | number) =>
      buildUrl(
        `${base}/api/mobile/wed/entrepreneur-development/{slug}/assessment/download-answer-key?id={id}`,
        { slug, id }
      ),
    downloadCertificate: (userId: string | number) =>
      buildUrl(
        `${base}/api/mobile/certificate/download?user_id={userId}`,
        { userId }
      ),
    downloadEdpCertificate: (userId: string | number) =>
      buildUrl(`${base}/api/mobile/edp-certificate?user_id={userId}`, {
        userId,
      }),
  },

  loan: `${base}/api/mobile/wed/user-loan`,
  checkUserLoan: (mobile: string) =>
    buildUrl(`${base}/api/mobile/wed/check-user?mobile={mobile}`, { mobile }),
  forgotPassword: `${base}/api/mobile/wed/forgot-password`,

  edp: {
    list: `${base}/api/mobile/entrepreneur-youth`,
    moduleList: (slug: string) =>
      buildUrl(`${base}/api/mobile/entrepreneur-youth/{slug}`, { slug }),
    orders: (
      userId: string | number,
      centerCode: string,
      categoryId: string | number,
      aadharNo: string
    ) =>
      buildUrl(
        `${base}/api/mobile/wed/edpOrders?user_id={userId}&center_code={centerCode}&category_id={categoryId}&aadhar_no={aadharNo}`,
        { userId, centerCode, categoryId, aadharNo }
      ),
  },

  exhibition: {
    stateExhibition: `${base}/api/mobile/state-exhibition`,
    exhibitionList: `${base}/api/mobile/exhibition-list/`,
    pressGallery: `${base}/api/mobile/pressgallery`,
    photoGallery: `${base}/api/mobile/photogallery`,
    videoGallery: `${base}/api/mobile/videogallery`,
  },

  schemes: {
    list: `${new_base}/api/public/schemes`,
    detail: (slug: string) =>
      buildUrl(`${new_base}/api/public/schemes/{slug}`, { slug }),
  },

  cfc: {
    list: `${new_base}/api/public/cfc`,
  },

  nablLabs:{
    list: `${new_base}/api/public/nabl-labs`
  },
  knowledgeHub: `${new_base}/api/public/knowledge-hub`,
  gallery_master: `${new_base}/api/public/gallery-master`,
  mda_reports: `${new_base}/api/public/mda-reports`,



} as const;
