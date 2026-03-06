/**
 * Smooth scroll to a section by its ID.
 * Use this instead of href="#id" anchors to avoid conflicts with HashRouter.
 */
export function scrollToSection(sectionId, e) {
    if (e) e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
