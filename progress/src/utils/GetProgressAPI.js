import axios from 'axios';
const url_progress = "http://localhost:8000/api/v1/progress";

export let GetProgressAPI = async (dispatch) => {
    dispatch(
        {
            type: "PROGRESS_LOADING"
        }
    )
    await axios.get(url_progress).then(
        res => dispatch(
            {
                type: "PROGRESS_SUCCESS",
                progress: res.data[res.data.length-1].dates,
            }
        )
    ).catch (
            err => (
                dispatch(
                    {
                        type: "PROGRESS_ERROR",
                        error: err.response.statusText,
                    }
                )
            )
    )
}