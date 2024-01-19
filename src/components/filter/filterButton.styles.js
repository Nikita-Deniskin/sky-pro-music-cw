import { styled } from 'styled-components'

export const filterCategory = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
`
export const filterButton = styled.button`
  font-size: 16px;
  line-height: 24px; /* 112.5% */
letter-spacing: 0.016px;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  border-color: ${(props) => (props.$active ? '#ad61ff' : 'white')};
  color: ${(props) => (props.$active ? '#ad61ff' : 'white')};
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`

export const filterPopup = styled.div`
  max-height: 305px;
  width: 248px;
  display: inline-flex;
  padding: 34px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: #313131;
  position: absolute;
  top: 49px;
  z-index: 2;
`

export const filterList = styled.ul`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  font-size: 20px;
  line-height: 24px; /* 120% */
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4b4949;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: white;
    height: 65px;
  }
`
export const selectedFilterItems = styled.div`
  background-color: #ad61ff;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -8px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px; /* 100% */
`