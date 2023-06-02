export function toggleModal(data) {
    return {
      type: data.type,
      payload: data.code,
    };
  }