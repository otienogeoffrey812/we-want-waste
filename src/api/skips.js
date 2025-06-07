export async function fetchSkips() {
    const res = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
    if (!res.ok) throw new Error('Failed to fetch skips');
    return res.json();
  }
  