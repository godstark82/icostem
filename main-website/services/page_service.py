from db_instance import db
from models.page_model import PageModel



def get_page_content(page_id: str) -> PageModel:
    try:
        # Assuming firestore is already initialized
        page = db.collection('pages').document(page_id).get()
        return PageModel.from_json(page.to_dict())
    except Exception as e:
        print(f"Error: {str(e)}")
        return {'error': str(e)}
    